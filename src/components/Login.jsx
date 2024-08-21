import React,{useState} from 'react'
import styles from './Login.module.css'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleLogin = async () => {
        try{
        const response = await fetch("http://localhost:3500/auth",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
            credentials: "include",
        
        }
        )
        if(response.ok){
            const data = await response.json()
            const {accessToken} = data

            localStorage.setItem('accessToken',accessToken)
            const decodedToken = jwtDecode(accessToken)
            const {UserInfo} = decodedToken
            const roles = UserInfo.roles
            if (roles.includes("01")) navigate("/dashboard")
            else if (roles.includes("02")) navigate("/record-sales")
            else if (roles.includes("03")) navigate("/record-purchase")
            else navigate("/unauthorized")
          
            console.log("Login Successful")

        }
        else{
            const errorData = await response.json()
            console.log("Login Failed: ", errorData)
            navigate("/unauthorized")
        }
    }
    catch(err){
        console.error(err)
    }

    }
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
                        <button className={styles.submitBtn} onClick={handleLogin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login