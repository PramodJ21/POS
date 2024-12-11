import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar';
import styles from './Inventory.module.css';
import InventoryTable from './InventoryTable';
import axios from 'axios'; // Make sure you have axios installed

const Inventory = () => {
  const today = new Date().toISOString().split('T')[0];
  
  const [inventory, setInventory] = useState([]);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const accessToken = localStorage.getItem('accessToken')
  
  // Function to fetch inventory data based on the date range
  const fetchInventoryData = async () => {
    try {
      const response = await fetch('https://pharma-erp-backend.onrender.com/inventory/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`  
        },
        body: JSON.stringify({
          startDate,
          endDate,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data)
      console.log(startDate)
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };
  // Handle the filter button click
  const handleFilter = () => {
    fetchInventoryData();
  };

  useEffect(() => {
    // Fetch initial data if needed
    fetchInventoryData();
    console.log(startDate)

  }, []);

  return (
    <div className={styles.inventory}>
      <Sidebar />
      <main className={styles.main}>
        <h1>Inventory</h1>
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
          <div className={styles.table}>
            <InventoryTable inventory={inventory} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;
