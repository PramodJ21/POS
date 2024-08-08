import React from 'react'
import Sidebar from './SideBar.jsx'
import styles from "./Dashboard.module.css"
const Dashboard = () => {
  return (
    <>
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <h1>Admin Dashboard</h1>
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
            <div className={styles.purchaseChart}>
              <h2>Purchase</h2>
              <img src="chart1.png" alt="Purchase Chart" />
            </div>
            <div className={styles.salesChart}>
              <h2>Sales</h2>
              <img src="chart1.png" alt="Purchase Chart" />
            </div>
            <div className={styles.profitChart}>
              <h2>Profit</h2>
              <img src="chart1.png" alt="Purchase Chart" />
            </div>
          </div>
        <div className={styles.manufacturing}>
          <h2>Manufacturing</h2>
          <div className={styles.cards}>
          <div className={styles.pendingBalance}>
            <div className={styles.box}></div>
            <p>Total Batches</p>
          </div>
          <div className={styles.wip}>
          <div className={styles.box}></div>
          <p>Batches in Progress</p>
          </div>
          <div className={styles.fg}>
          <div className={styles.box}></div>
          <p>Products Manufactured</p>
          </div>
          </div>
        </div>
        <div className={styles.inventory}>
          <table>
            {/* <caption>Inventory</caption> */}
            <thead>
            <tr>
              <th>On start of period</th>
              <th>Added</th>
              <th>Consumed</th>
              <th>On end of period</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>100</td>
              <td>10</td>
              <td>0</td>
              <td>110</td>
            </tr>
            <tr>
              <td>100</td>
              <td>10</td>
              <td>0</td>
              <td>110</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.legend}>
            <div className={styles.color1}>
              <div className={styles.color}></div>
              <p>Quantity</p>
            </div>
            <div className={styles.color2}>
            <div className={styles.color}></div>
            <p>Amount</p>
            </div>
        </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Dashboard