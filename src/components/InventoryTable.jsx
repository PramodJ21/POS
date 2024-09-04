import React from 'react'
import styles from './InventoryTable.module.css'
const InventoryTable = (props) => {
  return (
    <div className={styles.inventoryTable}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Opening Balance</th>
                    <th>Purchased</th>
                    <th>Sold</th>
                    <th>Closing Balance</th>
                </tr>
            </thead>
            <tbody>
                {props.inventory.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.productName}</td>
                            <td>{item.openingBalance}</td>
                            <td>{item.totalPurchased}</td>
                            <td>{item.totalSold}</td>
                            <td>{item.closingBalance}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default InventoryTable