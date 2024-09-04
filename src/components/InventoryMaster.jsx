import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from "./MasterTable.module.css"
import AddMasterData from './AddMasterData';
import EditMasterData from './EditMasterData';


const InventoryMaster = (props) => {
    const [trigger, setTrigger] = useState(false)
    const [editTrigger, setEditTrigger] = useState(false)
    const [editData, setEditData] = useState({})

    
    async function deleteData(productId){
        const response = await fetch(`http://localhost:5000/products/${productId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials : "include",
            
        })
        const res = await response.json()   
        if(response.ok){
            console.log("Data deleted successfully")
            props.setData(props.data.filter((item) => item.productId !== productId))
        }else{
            console.log("Data not deleted")
            
        }

        alert(res.message)
    }
    
    
  return (
    <div className={styles.table}>
         <table>
            <caption>Inventory Master</caption>
            <thead>
                <tr>
                    <th>Product productCode</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Purchase Price</th>
                    <th>Sale Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.productCode}</td>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.purchasePrice}</td>
                            <td>{item.salesPrice}</td>
                            <td>
                                <button onClick={()=>{
                                    setEditData(item)
                                    setEditTrigger(true)
                                    }}><FontAwesomeIcon icon={faPen} /></button>
                                <button onClick={()=>{deleteData(item.productId)}}><FontAwesomeIcon icon={faTrash} /></button>
                                
                                </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className={styles.add}>
        <button onClick={()=>setTrigger(true)}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <AddMasterData title="Inventory Master" trigger={trigger} setTrigger={setTrigger} data={props.data} setData={props.setData}/>
        <EditMasterData title="Edit Inventory Master" trigger={editTrigger} setTrigger={setEditTrigger} editData={editData} setData={props.setData} data={props.data}/>
    </div>
  )
}

export default InventoryMaster