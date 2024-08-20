import {React,useEffect,useState} from 'react'
import Sidebar from './SideBar'
import styles from './UserManagement.module.css'
import AddUser from './AddUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const UserManagement = () => {
    const accessToken = localStorage.getItem('accessToken')
    const [users, setUsers] = useState([])
    const [trigger, setTrigger] = useState(false)
    const deleteUser = async (user) => {
        // console.log(user)
        if(Object.values(user.roles).includes("01")){
            alert("Cannot delete Admin")
            return
        }
        const currentUser = user
        const response = await fetch("http://localhost:3500/deleteUser",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(currentUser),
            credentials: "include"

        })
        const data = await response.json()
        console.log(data)
        setUsers(newUsers)
    }
    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async() => {
        const response = await fetch("http://localhost:3500/getUser",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            credentials: "include"

        })
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }
    const getRoleName = (roles) => {
        return Object.keys(roles)
    }

    
  return (
    <div className={styles.UserManagement}>
    <Sidebar />
    <main className={styles.main}>
        <h1>User Management</h1>
        <div className={styles.content}>
            <div className={styles.buttons}>
                <button onClick={()=>setTrigger(true)}><FontAwesomeIcon icon={faPlus} /></button>
                
            </div>
            <div className={styles.userTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{getRoleName(user.roles)}</td>
                                <td><button><FontAwesomeIcon icon={faPen} /></button><button onClick={()=>deleteUser(user)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </div>
    </main>
    <AddUser trigger={trigger} setTrigger={setTrigger} setUsers={setUsers} users={users}/>

    </div>
  )
}

export default UserManagement