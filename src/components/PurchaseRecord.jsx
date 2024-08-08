import React, { useState } from 'react'
import styles from './PurchaseRecord.module.css'
import Header from './Header'
import PurchaseRecordTable from './PurchaseRecordTable'
const PurchaseRecord = () => {
  const [trigger , setTrigger] = useState(false);
  return (
    <div className={styles.purchaseRecord}>
      <Header title="Record Purchase"/>
        <div className={styles.records}>
          <div className={styles.inputs}>
          <select>
              <option>Product A</option>
              <option>Product B</option>
              <option>Product C</option>
            </select>
            <input type="text" placeholder="Qty" />
            <input type="text" placeholder="Rate" />
            <input type="date" />
            <select>
              <option>Vendor A</option>
              <option>Vendor B</option>
              <option>Vendor C</option>
            </select>
          </div>
          <div className={styles.generate}>
            <button onClick={()=>{setTrigger(true)}}>Generate</button>
          </div>
          <div className={styles.recordsTable}>
            <PurchaseRecordTable trigger={trigger} records={[
              {
                "productId":"1",
                "barcode":"123456",
                "productName":"Item A",
                "quantity":"10",
                "rate":"$10",
                "totalAmount":"$100",
                "purchaseDate":"2021-01-01",
                "vendor":"Vendor A"
              }
            ]} />
          </div>
        </div>
        </div>
  )
}

export default PurchaseRecord