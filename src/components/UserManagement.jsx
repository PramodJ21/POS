import {React,useEffect,useState} from 'react'
import Sidebar from './SideBar'
import styles from './UserManagement.module.css'
import AddUser from './AddUser'
import EditUser from './EditUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const UserManagement = () => {
    const accessToken = localStorage.getItem('accessToken')
    const [users, setUsers] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [trigger, setTrigger] = useState(false)
    const [editUserTrigger, setEditUserTrigger] = useState(false);
    const deleteUser = async (user) => {
        // console.log(user)
        if(user.role == "Admin") {
            alert("Cannot delete admin")
            return
        }
        const currentUser = user
        const newUsers = users.filter((user) => user !== currentUser)
        const response = await fetch(`https://pharma-erp-backend.onrender.com/users/${user._id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            credentials: "include"

        })
        const data = await response.json()
        console.log(data)
        setUsers(newUsers)
    }
    const editUser = async(user) => {
        setUserToEdit(user)
        setEditUserTrigger(true)
    }
    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = async() => {
        const response = await fetch("http://localhost:5000/users",{
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
                            <th>Role</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td><button onClick={()=> editUser(user)}><FontAwesomeIcon icon={faPen} /></button>
                                <button onClick={()=>deleteUser(user)}><FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </div>
    </main>
    <AddUser trigger={trigger} setTrigger={setTrigger} setUsers={setUsers} users={users}/>
    <EditUser 
        trigger={editUserTrigger} 
        setTrigger={setEditUserTrigger} 
        user={userToEdit}
      />
    </div>
  )
}

export default UserManagement
