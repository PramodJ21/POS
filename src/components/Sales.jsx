import React, { useEffect, useState } from 'react';
import styles from './Sales.module.css';
import Sidebar from './SideBar.jsx';
import TransactionTable from './TransactionTable.jsx';
import SalesChart from './SalesChart.jsx';
const accessToken = localStorage.getItem('accessToken')
const Sales = () => {
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [salesData, setSalesData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('all'); // Set default to 'all'
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getSellProducts();
  }, []);

  useEffect(() => {
    getSalesData(); // Fetch sales data whenever selectedProduct changes
  }, [selectedProduct]); // Dependency array to trigger on selectedProduct change

  const getSellProducts = async () => {
    try {
      // Fetch data from both endpoints
      const res1 = await fetch('http://localhost:5000/products/category/Finished%20Product',
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      const res2 = await fetch('http://localhost:5000/products/category/Trading%20Product',
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
      
      // Parse the JSON response from both fetch calls
      const data1 = await res1.json();
      const data2 = await res2.json();
  
      // Combine both arrays into a single array
      const combinedData = [...data1, ...data2];
  
      // Validate that the combined data is an array
      if (Array.isArray(combinedData)) {
        setProducts(combinedData);
      } else {
        console.error('Unexpected data format:', combinedData);
        setProducts([]); // Set to an empty array if data format is unexpected
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); // Set to an empty array on error
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
          productId: selectedProduct,
        }),
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      setSalesData(data.salesTransactionData);
      setChartData(data.aggregatedSalesData)
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
          <button onClick={getSalesData}>Filter</button>
        </div>
        <div className={styles.content}>
          <div className={styles.charts}>
            <div className={styles.chart}>
              <SalesChart aggregatedSalesData={chartData} />
            </div>
          
          </div>
          <div className={styles.table}>
            <div className={styles.productFilter}>
              <select
                onChange={(e) => setSelectedProduct(e.target.value)}
                value={selectedProduct}
              >
                <option value="all">All</option>
                {products.length !== 0 &&
                  products.map((product, i) => (
                    <option key={i} value={product.productId}>
                      {product.productName}
                    </option>
                  ))}
              </select>
            </div>
            <TransactionTable transactions={salesData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sales;
