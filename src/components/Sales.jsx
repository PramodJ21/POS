import React, { useEffect, useState } from 'react'
import styles from './Sales.module.css'
import Sidebar from './SideBar.jsx'
import TransactionTable from './TransactionTable.jsx'
const Sales = () => {
  const [salesData, setSalesData] = useState([])
  useEffect(()=>{
    getSalesData()
  },[])
  const getSalesData = async() => {
    const response = await fetch("http://localhost:3500/getSales",{
      method: "GET",
      headers: {
        "Content-Type": "application / json",
        },
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    setSalesData(data)

  }
  return (
    <div className={styles.sales}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Sales</h1>
        <div className={styles.filter}>
          <div className={styles.from}>
            <p>From</p>
            <input type="date" />
          </div>
          <div className={styles.to}>
            <p>To</p>
            <input type="date" />
          </div>
          <button>Filter</button>
        </div>
        <div className={styles.content}>
          <div className={styles.charts}>
            <div className={styles.chart}>
            {/* <img src="chart1.png" alt="Purchase Chart" /> */}
            </div>
            <div className={styles.chart}>
            {/* <img src="chart1.png" alt="Purchase Chart" /> */}
            </div>
          </div>
          <div className={styles.table}>
          <TransactionTable transactions={salesData}  />
            </div>
        </div>
        </main>
    </div>
  )
}

export default Sales