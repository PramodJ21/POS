import React from 'react'
import styles from './PurchaseTransactionTable.module.css'
const PurchaseTransactionTable = (props) => {
  return (
    <div className={styles.purchaseTransactionTable}>
        <table>
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Supplier ID</th>
                    <th>Purchase Date</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.purchaseTransactionId}</td>
                            <td>{item.supplier}</td>
                            <td>{item.purchaseDate}</td>
                            <td>{item.productName}</td>
                            <td>{item.purchasePrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalAmount}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default PurchaseTransactionTable