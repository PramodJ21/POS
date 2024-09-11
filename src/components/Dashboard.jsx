import {React, useEffect, useState} from 'react'
import Sidebar from './SideBar.jsx'
import styles from "./Dashboard.module.css"
import SalesChart from './SalesChart.jsx'
import PurchaseChart from './PurchaseChart.jsx'
const Dashboard = () => {
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [salesData, setSalesData] = useState()
  const [salesChartData, setSalesChartData] = useState([])
  const [purchaseChartData, setPurchaseChartData] = useState([])
  const [manufacturing, setManufacturing] = useState({total:0,wip:0,manufactured:0})
  const accessToken = localStorage.getItem("accessToken")

  useEffect(() => {filterData()},[])
  const filterData = () => {
    getSalesData()
    getPurchaseData()
    getManufacturingData()
  }

  const getManufacturingData = async () => {
    const response = await fetch('http://localhost:5000/manufacturing',{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
    }
    )
    const data = await response.json()
    console.log(data)
    const total = data.length
    const wip = (data.filter((d,i) => d.status === "Work in Progress")).length
    setManufacturing({...manufacturing, total,wip})
     
  }
  const getPurchaseData = async () => {
    try {
      const response = await fetch('http://localhost:5000/purchase/get', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate,
          productId: "all",
        }),
        credentials: 'include',
      });

      const data = await response.json();
      setPurchaseChartData(data.aggregatedPurchaseData)
    } catch (error) {
      console.error('Error fetching purchase data:', error);
    }
  };
  const getSalesData = async () => {
    try {
      const response = await fetch("http://localhost:5000/sales/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate,
          productId: "all",
        }),
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data)
      setSalesChartData(data.aggregatedSalesData)
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };
  return (
    <>
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <h1>Admin Dashboard</h1>
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
          <button onClick={filterData}>Filter</button>
        </div>
        <div className={styles.content}>
          <div className={styles.charts}>
            <div className={styles.purchaseChart}>
              {/* <h2>Purchase</h2> */}
              <PurchaseChart purchaseChartData={purchaseChartData}/>
            </div>
            <div className={styles.salesChart}>
              {/* <h2>Sales</h2> */}
              <SalesChart aggregatedSalesData={salesChartData} />
            </div>
            <div className={styles.profitChart}>
              {/* <h2>Profit</h2> */}
              <SalesChart aggregatedSalesData={salesChartData} />

            </div>
          </div>
        <div className={styles.manufacturing}>
          <h2>Manufacturing</h2>
          <div className={styles.cards}>
          <div className={styles.pendingBalance}>
            <div className={styles.box}>{manufacturing.total}</div>
            <p>Total Batches</p>
          </div>
          <div className={styles.wip}>
          <div className={styles.box}>{manufacturing.wip}</div>
          <p>Batches in Progress</p>
          </div>
          <div className={styles.fg}>
          <div className={styles.box}>{manufacturing.manufactured}</div>
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