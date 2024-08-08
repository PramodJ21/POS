import React from 'react';
import styles from './TransactionTable.module.css';
const TransactionTable = (props) => {
    return (
        <div className={styles.salesTransactionTable}>
        <table>
            <thead>
                <tr>
                    <th>Invoice No</th>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.invoiceNo}</td>
                            <td>{item.transactionId}</td>
                            <td>{item.customerName}</td>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalAmount}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    );
};

export default TransactionTable;
