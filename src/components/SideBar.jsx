import React from 'react'
import styles from "./Sidebar.module.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const name = "Amod";
  const a = `Name: ${name}`;
  return (
    <>
    <aside className={styles.aside}>
        <div className={styles.logo}>
          <img src="https://via.placeholder.com/50" alt="Logo" />
          <h2>VPPL</h2>
        </div>
        <div className={styles.userProfile}>
          <img src="https://via.placeholder.com/75" alt="Profile" />
          <p className={styles.name}>Pramod Joshi</p>
          <p className={styles.position}>Developer</p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><NavLink to="/dashboard" 
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}><FontAwesomeIcon icon={faChartSimple} /><p>Dashboard</p></NavLink></li>
            <li><NavLink to="/purchase"
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}><FontAwesomeIcon icon={faMoneyBill} /><p>Purchase</p></NavLink></li>
            <li><NavLink to="/inventory"
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}><FontAwesomeIcon icon={faBox} /><p>Inventory</p></NavLink></li>
            <li><NavLink to="/sales"
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}><FontAwesomeIcon icon={faChartLine} /><p>Sales</p></NavLink></li>
            <li><NavLink to="/manufacturing"
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}><FontAwesomeIcon icon={faGear} /><p>Manufacturing</p></NavLink></li>
            <li><NavLink to="/masters"
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}><FontAwesomeIcon icon={faBook} /><p>Masters</p></NavLink></li>
            <li><NavLink to="/user-management"
            className={({ isActive }) => (isActive ? `${styles.active_link}` : '')}
            ><FontAwesomeIcon icon={faUser} /><p>Users</p></NavLink></li>
          </ul>
            <div className={styles.logout}><NavLink to="/" end ><FontAwesomeIcon icon={faRightFromBracket} size='2x'/></NavLink></div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar