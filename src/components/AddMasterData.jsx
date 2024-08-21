import React, { useState } from 'react'
import styles from './AddMasterData.module.css'
const AddMasterData = (props) => {
    const [data, setData] = useState({no:"", name:"", category:"", uom:"", purchasePrice:"", sellPrice:""});
    const keys = Object.keys(data);

    const addMasterData = async(req,res) =>{

        const response = await fetch('http://localhost:3500/masters/add',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials : "include",
            body: JSON.stringify(data)
        })
        if(response.ok){
            console.log("Data added successfully")
        }
        else{
            console.log("Data not added")
        }
        
    }
  return (
    (props.trigger) ?
    (

   <div className={styles.popup}>
        <div className={styles.inner}>
            <h1>{props.title}</h1>
            {/* {props.inputs.map(
                (input,index) =>
                    (
                        <input type='text' value={data[keys[index]]} onChange={(e)=>{setData({...data, [keys[index]]:e.target.value})}} key={index} placeholder={input}></input>
                    )
                
            )} */}
            <input type='text' value={data["no"]} onChange={(e) => {setData({...data,"no":e.target.value})}} placeholder='Product No'/>
            <input  type='text' value={data["name"]} onChange={(e) => {setData({...data,"name":e.target.value})}} placeholder='Product Name'/>
            <select value={data["category"]} onChange={(e) => {setData({...data, "category":e.target.value})}}>
                <option value='' disabled>Select Category</option>
                <option value='TP'>Trading Product</option>
                <option value='FP'>Finished Product</option>
                <option value='RM'>Raw Material</option>
            </select>
            <select value={data["uom"]} onChange={(e) => {setData({...data, "uom":e.target.value})}}>
                <option value='' disabled>Select UOM</option>
                <option value='mg'>MilliGrams</option>
                <option value='gm'>Grams</option>
                <option value='kg'>KiloGrams</option>
            </select>
            <input  type='text' value={data["purchasePrice"]} onChange={(e) => {setData({...data,"purchasePrice":e.target.value})}} placeholder='Purchase Price'/>
            <input  type='text' value={data["sellPrice"]} onChange={(e) => {setData({...data,"sellPrice":e.target.value})}} placeholder='Sell Price'/>
            <button onClick={()=>{
                if(data.no === '' || data.name === '' || data.category === '' || data.uom === '' || data.purchasePrice === '' || data.sellPrice === ''){
                    alert('Please fill all fields')
                    return
                }
                else{
                    addMasterData(data)
                    // props.setData([...props.data, data])
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