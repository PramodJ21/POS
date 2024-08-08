import React, { useState } from 'react'
import styles from './AddMasterData.module.css'
const AddMasterData = (props) => {
    const [data, setData] = useState({no:"", name:"", category:"", uom:"", purchasePrice:"", sellPrice:""});
    const keys = Object.keys(data);
  return (
    (props.trigger) ?
    (

   <div className={styles.popup}>
        <div className={styles.inner}>
            <h1>{props.title}</h1>
            {props.inputs.map(
                (input,index) =>
                    (
                        <input type='text' value={data[keys[index]]} onChange={(e)=>{setData({...data, [keys[index]]:e.target.value})}} key={index} placeholder={input}></input>
                    )
                
            )}
            <button onClick={()=>{
                if(data.no === '' || data.name === '' || data.category === '' || data.uom === '' || data.purchasePrice === '' || data.sellPrice === ''){
                    alert('Please fill all fields')
                    return
                }
                else{
                    props.setData([...props.data, data])
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