import React from 'react'
import styles from './Sales.module.css'
import Sidebar from './SideBar.jsx'
import TransactionTable from './TransactionTable.jsx'
const Sales = () => {
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
          <TransactionTable transactions={[{
            "invoiceNo":"INV/001/24-25",
            "transactionDate":"1/04/24",
            "customerName":"Pramod Joshi",
            "productName":"Crocin",
            "quantity":"10",
            "totalAmount":"100"
            },]}  />
            </div>
        </div>
        </main>
    </div>
  )
}

export default Sales