import React, { useEffect, useState } from 'react'
import styles from './Purchase.module.css'
// import styles1 from './Dashboard.module.css'
import Sidebar from './SideBar.jsx'
import TransactionTable from './TransactionTable.jsx'
import PurchaseTransactionTable from './PurchaseTransactionTable.jsx'
const Purchase = () => {
  const [purchaseData,setPurchaseData] = useState([])

  const getPurchaseData = async () => {
    const response = await fetch('http://localhost:3500/purchase/get')
    const data = await response.json()
    setPurchaseData(data)
  }

  useEffect(()=>{
    getPurchaseData()
  },[])
  return (
    <div className={styles.purchase}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Purchase</h1>
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
          <div className={styles.purchaseTable}>
          <PurchaseTransactionTable transactions={purchaseData} />
            </div>
        </div>
        </main>
    </div>
  )
}

export default Purchase;