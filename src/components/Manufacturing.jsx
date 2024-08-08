import React from 'react'
import styles from './Manufacturing.module.css'
import Sidebar from './SideBar'
import ManufacturingTable from './ManufacturingTable'
const Manufacturing = () => {
  return (
    <div className={styles.manufacturing}>
         <Sidebar />
        <main className={styles.main}>
          <h1>Manufacturing</h1>
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
          <div className={styles.boxAndChart}>
          <div className={styles.chart}>
                <h2>Chart Name</h2>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h2>Units Mfg</h2>
                    <div>200</div>

                </div>
                <div className={styles.box}>
                    <h2>Cost of Mfg</h2>
                    <div>abcd</div>
                </div>
                <div className={styles.box}>
                    <h2>WIP</h2>
                    <div>abcd</div>
                </div>
                
            </div>
            
            </div>
            
        <div className={styles.table}>
          <div className={styles.productFilter}>
            <select>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
            </select>
          </div>
          <div className={styles.manufacturingTable}>
          <ManufacturingTable  transactions={[{
            "bathNo":"1",
            "qtyA":"100",
            "qtyB":"100",
            "wastage":"10",
            "output":"180",
            "unitsMfg":"80",
            "cost":"1000",
          },]} />
          </div>
        </div>
        </div>
        </main>
    </div>
  )
}

export default Manufacturing