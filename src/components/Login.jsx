import React,{useState} from 'react'
import styles from './Login.module.css'
import { Link, NavLink } from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (

    <>
    <div className={styles.main}>
        <div className={styles.float}>
            <div className={styles.left}>
                <div className={styles.cover}>

                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.content}>
                    <div className={styles.greetings}>
                        <h1>Hello!</h1>
                        <h2> Welcome Back</h2>
                    </div>
                    <div className={styles.form}>
                        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} className={styles.email}placeholder="Username"/>
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className={styles.passwordField} placeholder="Password"/>
                        <NavLink to="/dashboard" className={styles.login}><button className={styles.submitBtn}>Sign In</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login