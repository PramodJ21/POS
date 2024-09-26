import React, { useEffect, useState } from 'react'
import styles from './Manufacturing.module.css'
import Sidebar from './SideBar'
import ManufacturingTable from './ManufacturingTable'
import ManufacturingChart from './ManufacturingChart.jsx'
const Manufacturing = () => {
  const [manufacturingData, setManufacturingData] = useState([])
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [unitsMFG, setUnitsMFG] = useState(0)
  const [costOfMFG, setCostOfMFG] = useState(0)
  const [wip, setWIP] = useState(0)
  const [manufacturingChartData, setManufacturingChartData] = useState([]) 
  const accessToken = localStorage.getItem('accessToken')

  const getChartData = async () => {
    const response = await fetch('http://localhost:5000/manufacturing/chart',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productName: selectedProduct
      })
    }
    )
    const data = await response.json()
    console.log(data) 
    setManufacturingChartData(data)
  }
  const getAllData = async () =>{
    const response = await fetch("http://localhost:5000/manufacturing",{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
    const wipData = data.filter((d,i) => d.status === "Work in Progress" && d.productName === selectedProduct)
    setWIP(wipData.length)
  }
  const getManufacturingData = async (p) => {
    if(p == "") return
    const response = await fetch(`http://localhost:5000/manufacturing/completed/${p}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json'
      }
    }
    )
    const data = await response.json()
    console.log(data)
    data.map((d,i) => {
      console.log(d)
      setUnitsMFG(unitsMFG => unitsMFG + parseInt(d.manufacturedQuantity))
      setCostOfMFG(costOfMFG => parseInt(d.totalCost))
    })
   
    if(response.ok){
    setManufacturingData(data)
    }
  }

  const getFinsihsedProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/products/category',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: ['Finished Product']
        })

      });
      const data = await res.json();
  
      // Validate that data is an array
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('Unexpected data format:', data);
        setProducts([]); // Set to empty array if data format is unexpected
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); // Set to empty array on error
    }
  };
  useEffect(
    () => {
      getFinsihsedProducts()
      getAllData()
      if(selectedProduct) getChartData()
    }
  ,[selectedProduct])
  
  return (
    <div className={styles.manufacturing}>
         <Sidebar />
        <main className={styles.main}>
          <h1>Manufacturing</h1>
        {/* <div className={styles.filter}>
          <div className={styles.from}>
            <p>From</p>
            <input type="date" />
          </div>
          <div className={styles.to}>
            <p>To</p>
            <input type="date" />
          </div>
          <button>Filter</button>
        </div> */}
        <div className={styles.content}>
          <div className={styles.boxAndChart}>
          <div className={styles.chart}>

              <ManufacturingChart manufacturingChartData={manufacturingChartData} />
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h2>Units Mfg</h2>
                    <div>{unitsMFG}</div>

                </div>
                <div className={styles.box}>
                    <h2>Cost of Mfg</h2>
                    <div>{costOfMFG}</div>
                </div>
                <div className={styles.box}>
                    <h2>WIP</h2>
                    <div>{wip}</div>
                </div>
                
            </div>
            
            </div>
            
        <div className={styles.table}>
          <div className={styles.productFilter}>
            <select onChange={(e) => {
              setSelectedProduct(e.target.value)
              getManufacturingData(e.target.value)
            }}>
              <option  value="">Select Product</option>
              {products.length != 0 && products.map((product,i) => {
                return <option key={i} value={product.productName}>{product.productName}</option>
              })}
            </select>
          </div>
          <div className={styles.manufacturingTable}>
          <ManufacturingTable realData={manufacturingData} />
          </div>
        </div>
        </div>
        </main>
    </div>
  )
}

export default Manufacturing