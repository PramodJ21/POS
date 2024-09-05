import React, { useEffect, useState } from 'react'
import styles from './Sales.module.css'
import Sidebar from './SideBar.jsx'
import TransactionTable from './TransactionTable.jsx'
import SalesChart from './SalesTrendChart.jsx'
const Sales = () => {
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [salesData, setSalesData] = useState([])
  useEffect(()=>{
    getSalesData()
  },[])
  const handleFilter = () => {
    getSalesData();
  };
  const getSalesData = async () => {
    try {
      const response = await fetch("http://localhost:5000/sales/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate
        }),
        credentials: "include"
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      setSalesData(data);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };
  
  return (
    <div className={styles.sales}>
        <Sidebar />
        <main className={styles.main}>
          <h1>Sales</h1>
        <div className={styles.filter}>
        <div className={styles.from}>
            <p>From</p>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles.to}>
            <p>To</p>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button onClick={handleFilter}>Filter</button>
        </div>
        <div className={styles.content}>
          <div className={styles.charts}>
            <div className={styles.chart}>
              <SalesChart salesData={salesData} />
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