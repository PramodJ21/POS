import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <div className={styles.header}>
        <div className={styles.heading}><h1>{props.title}</h1></div>
        <div className={styles.nav}>
        <div className={styles.profile}></div>
        <div className={styles.logout}> <NavLink to="/" end ><FontAwesomeIcon icon={faRightFromBracket}/></NavLink></div>
        </div>
       
    </div>
  )
}

export default Header