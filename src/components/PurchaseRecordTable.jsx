import React, { useEffect } from 'react'
import styles from './PurchaseRecordTable.module.css'
const PurchaseRecordTable = (props) => {
    useEffect(()=>{
        console.log(props.records)
    },[])
  return (
    (props.trigger) ? (
    <div className={styles.purchaseRecordTable}>
        <table>
            <thead>
            <tr>
                <th>Transaction Id</th>
                <th>Unique ID</th>
                <th>Barcode no</th>
                <th>Product Name</th>
                <th>Purchase Date</th>
                <th>Supplier</th>
            </tr>
            </thead>
            <tbody>
            {props.records.map(
                (record, index) => (
                    <tr key={index}>
                        <td>{record.purchaseTransactionId}</td>
                        <td>{record.uniqueProductId}</td>
                        <td>{record.barcodeNo}</td>
                        <td>{record.productName}</td>
                        <td>{record.purchaseDate}</td>
                        <td>{record.supplier}</td>
                    </tr>
                )

            )}
        

            </tbody>
        </table>
    </div>
    ) : ""
  )
}

export default PurchaseRecordTable