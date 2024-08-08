import {React,useState} from 'react'
import styles from './AddUser.module.css'
const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
const AddUser = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
  return (
    (props.trigger) ?
    (

   <div className={styles.popup}>
        <div className={styles.inner}>
            <h1>User Information</h1>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'></input>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'></input>
            <input type='text' value={role} onChange={(e)=>setRole(e.target.value)} placeholder='Role'></input>
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
            <button onClick={()=>{
              if(username === '' || email === '' || role === '' || password === ''){
                alert('Please fill all fields')
                return
              }
              else if (!regex.test(email)){
                alert('Invalid email')
                return
              }
              else{
                props.setTrigger(false)
                props.setUsers([...props.users, {username: username, email: email, role: role, password: password}])
              }
            }}>Add</button>
            <button onClick={()=>{props.setTrigger(false)}} className={styles.cancelBtn}>Cancel</button>
        </div>
   </div>
    
) : ''
  )
}

export default AddUser