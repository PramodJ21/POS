import React, { useEffect, useState } from 'react'
import styles from './Manufacturing.module.css'
import Sidebar from './SideBar'
import ManufacturingTable from './ManufacturingTable'
const Manufacturing = () => {
  const [manufacturingData, setManufacturingData] = useState([])
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const getManufacturingData = async (p) => {
    if(p == "") return
    const response = await fetch(`http://localhost:5000/manufacturing/completed/${p}`)
    const data = await response.json()
    console.log(data)
    setManufacturingData(data)
  }

  const getFinsihsedProducts = async () => {
    const res =await fetch('http://localhost:5000/products/category/Finished%20Product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }

  useEffect(
    () => {getFinsihsedProducts()}
  ,[])
  
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
            <select onChange={(e) => {
              setSelectedProduct(e.target.value)
              getManufacturingData(e.target.value)
            }}>
              <option  value="">Select Product</option>
              {products.map((product,i) => {
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