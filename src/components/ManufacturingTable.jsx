import React from 'react'
import styles from './ManufacturingTable.module.css'
const ManufacturingTable = (props) => {
  return (
    <div className={styles.manufacturingTable}>
        <table>
            <thead>
                <tr>
                   <th>Bath No</th>
                   <th>Qty A</th>
                   <th>Qty B</th>
                   <th>Wastage</th>
                   <th>Output</th>
                   <th>Units MFG</th>
                   <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.bathNo}</td>
                            <td>{item.qtyA}</td>
                            <td>{item.qtyB}</td>
                            <td>{item.wastage}</td>
                            <td>{item.output}</td>
                            <td>{item.unitsMfg}</td>
                            <td>{item.cost}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ManufacturingTable