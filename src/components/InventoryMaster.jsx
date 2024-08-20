import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from "./MasterTable.module.css"
import AddMasterData from './AddMasterData';


const InventoryMaster = (props) => {
    const [trigger, setTrigger] = useState(false)

    function deleteData(index){
        const newData = [...props.data]
        newData.splice(index, 1)
        props.setData(newData)
    }
  return (
    <div className={styles.table}>
         <table>
            <caption>Inventory Master</caption>
            <thead>
                <tr>
                    <th>Product No</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Unit of Measurement</th>
                    <th>Purchase Price</th>
                    <th>Sell Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.no}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.uom}</td>
                            <td>{item.purchasePrice}</td>
                            <td>{item.sellPrice}</td>
                            <td>
                                <button><FontAwesomeIcon icon={faPen} /></button>
                                <button onClick={()=>{deleteData(index)}}><FontAwesomeIcon icon={faTrash} /></button>
                                
                                </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className={styles.add}>
        <button onClick={()=>setTrigger(true)}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <AddMasterData title="Inventory Master" inputs={["Product No","Product Name","Category","Unit of Measurement","Purchase Price","Sell Price"]} trigger={trigger} setTrigger={setTrigger} data={props.data} setData={props.setData}/>
    </div>
  )
}

export default InventoryMaster