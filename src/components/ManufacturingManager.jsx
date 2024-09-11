import React, { useEffect, useRef, useState } from 'react'
import styles from './ManufacturingManager.module.css'
import Header from './Header'
import ManufacturerTable from './ManufacturerTable'
const ManufacturingManager = () => {
  const [productsToManufacture, setProductsToManufacture] = useState([])
  const [product, setProduct] = useState({productName : "", quantity: ""})
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const accessToken = localStorage.getItem("accessToken")
  useEffect(()=>{
    getProductsToManufacture()
    
  },[])
  const getProductsToManufacture = async () => {
    const response = await fetch('http://localhost:5000/products/category/Finished%20Product',
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
    )
    const data = await response.json()
    setProductsToManufacture(data)
  }
  const checkAvailability = async () => {
    if(product.productName == "" || product.quantity == ""){
      alert("Product Name and Quantity both should be present")
      return
    }
     try {
      const response = await fetch('http://localhost:5000/manufacturing/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(product),
      });
      
      const result = await response.json();
      console.log(result)
      if (result.message === 'Insufficient ingredients.') {
        setError(result);
        setSuccess(null)
      } else {
        // Handle successful manufacturing
        setError(null);
        setSuccess(true)
        // Add additional success handling logic here
      }
    } catch (err) {
      console.log('Error:', err);
      setError({ message: 'An error occurred while processing your request.' });
    }
  }

  const handleStart = async () => {
    try {
      const response = await fetch('http://localhost:5000/manufacturing/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`

        },
        body: JSON.stringify(product),
      });
      
      const result = await response.json();
      console.log(result)
      if (result.message === 'Insufficient ingredients.') {
        setError(result);
        setSuccess(null)
      } else {
        // Handle successful manufacturing
        setError(null);
        setSuccess(true)
        // Add additional success handling logic here
      }
    } catch (err) {
      console.log('Error:', err);
      setError({ message: 'An error occurred while processing your request.' });
    }
  }
  return (
    <div className={styles.main}>
      <Header title="Manufacturing"/>
        <div className={styles.manufacture_products}>
          <div className={styles.heading}>
            <h2>BATCH MANUFACTURING MODULE</h2>
          </div>
          <div className={styles.inputs}>
            <div className={styles.product_selection}>
            <label>Start Product Of: </label>
            <select onChange={(e) => { setProduct({...product, "productName":e.target.value}) }} defaultValue="">
              <option value="" disabled>Select Product</option>
              {productsToManufacture.map((item, index) => (
                <option key={index} value={item.productName}>{item.productName}</option>
              ))}
          </select>

            </div>
            <div className={styles.quantity}>
            <label>Quantity: </label>
            <input onChange={(e) => { setProduct({...product, "quantity":e.target.value}) }}  type='number' />
            </div>
          </div>
          <div className={styles.check_button}>
            <button onClick={checkAvailability}>Check Availability</button>
          </div>
          {error && error.message === 'Insufficient ingredients.' && (
        <div className={styles.insufficient}>
          <h3>Insufficient Ingredients:</h3>
          <ul>
            {error.missingIngredients.map((ingredient, index) => (
              <li key={index}>
                <strong>{ingredient.productName}</strong>: Required Quantity: {ingredient.requiredQuantity}, Available Quantity: {ingredient.availableQuantity}
              </li>
            ))}
          </ul>
        </div>
      )}
      {success && (
        <div className={styles.sufficient}>
        <h3>Sufficient Ingredients Available</h3>
        <button className={styles.startButton} onClick={handleStart}>Start</button>
      </div>
      
      )}
        </div>
        <div className={styles.manufacturing_table}>
          <ManufacturerTable />
        </div>
    </div>
  )
}

export default ManufacturingManager