import React, { useEffect, useState } from 'react';
import styles from './Purchase.module.css';
import Sidebar from './SideBar.jsx';
import PurchaseTransactionTable from './PurchaseTransactionTable.jsx';
import PurchaseChart from './PurchaseChart.jsx';
const Purchase = () => {
  const today = new Date().toISOString().split('T')[0];
  const [purchaseData, setPurchaseData] = useState([]);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [products, setProducts] = useState([]);
  const [purchaseChartData, setPurchaseChartData] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)
  useEffect(() => {
    getPurchaseProducts();
    getPurchaseData();
  }, [selectedProduct]);

  const getPurchaseProducts = async () => {
    try {
      // Fetch only Raw Material and Trading Product categories
      const res1 = await fetch('https://pharma-erp-backend.onrender.com/products/category/Raw%20Material', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json' // Optional, depending on your API requirements
        }
      });
      
      const res2 = await fetch('https://pharma-erp-backend.onrender.com/products/category/Trading%20Product', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json' // Optional, depending on your API requirements
        }
      });

      // Parse the JSON responses
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

  const handleFilter = () => {
    getPurchaseData();
  };

  const getPurchaseData = async () => {
    try {
      const response = await fetch('https://pharma-erp-backend.onrender.com/purchase/get', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate,
          productId: selectedProduct,
        }),
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data);
      setPurchaseData(data.purchaseData);
      setPurchaseChartData(data.aggregatedPurchaseData)
    } catch (error) {
      console.error('Error fetching purchase data:', error);
    }
  };

  return (
    <div className={styles.purchase}>
      <Sidebar />
      <main className={styles.main}>
        <h1>Purchase</h1>
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
              <PurchaseChart purchaseChartData={purchaseChartData} />
            </div>
          </div>
          <div className={styles.purchaseTable}>
          <div className={styles.productFilter}>
            <select
              onChange={(e) => {
                setSelectedProduct(e.target.value);
              }}
            >
              <option value="all">All</option>
              {products.length !== 0 &&
                products.map((product, i) => {
                  return (
                    <option key={i} value={product.productId}>
                      {product.productName}
                    </option>
                  );
                })}
            </select>
          </div>
            <PurchaseTransactionTable transactions={purchaseData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Purchase;
