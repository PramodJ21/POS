import React, { useEffect, useState } from 'react'
import styles from './Manufacturing.module.css'
import Sidebar from './SideBar'
import ManufacturingTable from './ManufacturingTable'
const Manufacturing = () => {
  const [manufacturingData, setManufacturingData] = useState([])
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [unitsMFG, setUnitsMFG] = useState(0)
  const [costOfMFG, setCostOfMFG] = useState(0)
  const getManufacturingData = async (p) => {
    if(p == "") return
    const response = await fetch(`http://localhost:5000/manufacturing/completed/${p}`)
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
      const res = await fetch('http://localhost:5000/products/category/Finished%20Product');
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
    () => {getFinsihsedProducts()}
  ,[])
  
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
                <h2>Chart Name</h2>
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