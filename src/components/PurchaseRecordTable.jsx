import React from 'react'
import styles from './PurchaseRecordTable.module.css'
const PurchaseRecordTable = (props) => {
  return (
    (props.trigger) ? (
    <div className={styles.purchaseRecordTable}>
        <table>
            <thead>
            <tr>
                <th>Product Id</th>
                <th>Barcode no</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Total Amount</th>
                <th>Purchase Date</th>
                <th>Vendor</th>
            </tr>
            </thead>
            <tbody>
            {props.records.map(
                (record, index) => (
                    <tr key={index}>
                        <td>{record.productId}</td>
                        <td>{record.barcode}</td>
                        <td>{record.productName}</td>
                        <td>{record.quantity}</td>
                        <td>{record.rate}</td>
                        <td>{record.totalAmount}</td>
                        <td>{record.purchaseDate}</td>
                        <td>{record.vendor}</td>
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