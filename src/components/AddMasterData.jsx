import React, { useState } from 'react'
import styles from './AddMasterData.module.css'
const AddMasterData = (props) => {
    const [data, setData] = useState({productCode:"", productName:"", category:"", purchasePrice:"", salesPrice:"", supplier:""});
    const addMasterData = async(req,res) =>{

        const response = await fetch('http://localhost:5000/products',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials : "include",
            body: JSON.stringify(data)
        })
        const resp = await response.json()
        if(response.ok){
            console.log("Data added successfully")
        }
        else{
            console.log("Data not added")
        }
        alert(resp.message)
        
    }
  return (
    (props.trigger) ?
    (

   <div className={styles.popup}>
        <div className={styles.inner}>
            <h1>{props.title}</h1>
            <input type='text' value={data["productCode"]} onChange={(e) => {setData({...data,"productCode":e.target.value})}} placeholder='Product Code'/>
            <input  type='text' value={data["productName"]} onChange={(e) => {setData({...data,"productName":e.target.value})}} placeholder='Product Name'/>
            <select value={data["category"]} onChange={(e) => {setData({...data, "category":e.target.value})}}>
                <option value='' disabled>Select Category</option>
                <option value='Trading Product'>Trading Product</option>
                <option value='Finished Product'>Finished Product</option>
                <option value='Raw Material'>Raw Material</option>
            </select>
            {/* <select value={data["uom"]} onChange={(e) => {setData({...data, "uom":e.target.value})}}>
                <option value='' disabled>Select UOM</option>
                <option value='mg'>MilliGrams</option>
                <option value='gm'>Grams</option>
                <option value='kg'>KiloGrams</option>
            </select> */}
            <input  type='text' value={data["purchasePrice"]} onChange={(e) => {setData({...data,"purchasePrice":e.target.value})}} placeholder='Purchase Price'/>
            <input  type='text' value={data["salesPrice"]} onChange={(e) => {setData({...data,"salesPrice":e.target.value})}} placeholder='Sell Price'/>
            <input  type='text' value={data["supplier"]} onChange={(e) => {setData({...data,"supplier":e.target.value})}} placeholder='Supplier'/>
            <button onClick={()=>{
                if(data.productCode === '' || data.productName === '' || data.category === '' ||  data.purchasePrice === '' || data.salesPrice === '' || data.supplier === ''){
                    alert('Please fill all fields')
                    return
                }
                else{
                    addMasterData(data)
                }
                props.setTrigger(false)
            }}>Add</button>
            <button onClick={()=>{props.setTrigger(false)}} className={styles.cancelBtn}>Cancel</button>
        </div>
   </div>
    
) : ''
  )
}

export default AddMasterData