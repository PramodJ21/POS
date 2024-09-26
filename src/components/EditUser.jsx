import React, { useState, useEffect } from 'react';
import styles from './EditUser.module.css';

const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const EditUser = (props) => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const accessToken = localStorage.getItem('accessToken');
    useEffect(() => {
        if (props.user) {
            setUsername(props.user.username);
            setRole(props.user.role);
            // We don't set the password here for security reasons
        }
    }, [props.user]);

    const updateUser = async (user) => {
        const response = await fetch(`http://localhost:5000/users/${props.user._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            credentials: "include",
            body: JSON.stringify(user)
        });
        
        const data = await response.json();
        console.log(data);
        window.location.reload();
    };

    return (
        props.trigger ? (
            <div className={styles.popup}>
                <div className={styles.inner}>
                    <h1>Edit User Information</h1>
                    <input 
                        type='text' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder='Username'
                    />
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value='' disabled>Select Role</option>
                        <option value='Admin'>Admin</option>
                        <option value='Sales Operator'>Sales Operator</option>
                        <option value='Purchase'>Purchase</option>
                        <option value='Manufacturer'>Manufacturer</option>
                    </select>
                    
                    <button onClick={() => {
                        if (username === '' || role === '') {
                            alert('Please fill all required fields');
                            return;
                        }
                        
                        const updatedUser = {
                            username: username,
                            role: role,
                        };
                        
                        
                        updateUser(updatedUser);
                        props.setTrigger(false);
                    }}>
                        Update
                    </button>
                    <button 
                        onClick={() => props.setTrigger(false)} 
                        className={styles.cancelBtn}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ) : null
    );
};

export default EditUser;