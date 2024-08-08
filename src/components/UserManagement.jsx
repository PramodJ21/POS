import {React,useState} from 'react'
import Sidebar from './SideBar'
import styles from './UserManagement.module.css'
import AddUser from './AddUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const temp_users = [
    {
        username: 'admin',
        email: 'admin123@gmail.com',
        role: 'admin',
        password: 'admin123'
    },
    {
        username: 'user',
        email: 'user@gmail.com',
        role: 'user',
        password: 'user123'
    },
]
const UserManagement = () => {
    const [users, setUsers] = useState(temp_users)
    const [trigger, setTrigger] = useState(false)
    const deleteUser = (index) => {
        const newUsers = [...users]
        newUsers.splice(index, 1)
        setUsers(newUsers)
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
                            <th>Password</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.password}</td>
                                <td><button><FontAwesomeIcon icon={faPen} /></button><button onClick={()=>deleteUser(index  )}><FontAwesomeIcon icon={faTrash} /></button></td>
                                
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