import React, { useState,useEffect,useRef} from 'react'
import styles from './PurchaseRecord.module.css'
import Header from './Header'
import PurchaseRecordTable from './PurchaseRecordTable'
const PurchaseRecord = () => {
  const [trigger , setTrigger] = useState(false);
  const [purchaseData,setPurchaseData] = useState([])
  const productRef = useRef(null)
  const qtyRef = useRef(null)
  const dateRef = useRef(null)
  const vendorRef = useRef(null)
  const [masterData, setMasterData] = useState([])
  const [productName, setProductName] = useState("")
  const [vendorName, setVendorName] = useState("")
    useEffect(()=>{
        getMasterData()
    },[])

    const getMasterData = async () => {
        const response = await fetch('http://localhost:3500/masters/get')
        const data = await response.json()
        setMasterData(data)
    }

    const generateData = async () =>{
      const data = []
      const foundData = masterData.find(data=>data.name === productRef.current.value)
      const sendData = {
        "purchaseId": foundData.no,
        "supplierId": vendorRef.current.value,
        "purchaseDate": dateRef.current.value,
        "productName": productRef.current.value,
        "unitPrice": foundData.purchasePrice,
        "quantity": qtyRef.current.value,
        "totalAmount": parseInt(qtyRef.current.value)*parseInt(foundData.purchasePrice)

      }

      const response = await fetch("http://localhost:3500/purchase/store",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(sendData)
      })
      
      if(response.ok){
        console.log("Data stored")
      }
      else{
        console.log("Data not stored")
      }

      const limit = parseInt(qtyRef.current.value)
      for(let i =0;i<limit;i++){
        data.push({
          "productId":foundData.no,
          "barcode":"123456",
          "productName":productRef.current.value,
          "quantity":"1",
          "rate":foundData.sellPrice,
          "totalAmount":limit*parseInt(foundData.sellPrice),
          "purchaseDate":dateRef.current.value,
          "vendor":vendorRef.current.value

        })
      }
      
      setPurchaseData(data)
      console.log(purchaseData)
    }
  return (
    <div className={styles.purchaseRecord}>
      <Header title="Record Purchase"/>
        <div className={styles.records}>
          <div className={styles.inputs}>
          <select ref={productRef} value={productName} onChange={(e) => {setProductName(e.target.value)}}>
              {masterData.map((item,index)=>{
                return <option key={index}>{item.name}</option>
              })}
            </select>
            <input ref={qtyRef} type="text" placeholder="Qty" />
            <input  type="text" placeholder="Rate" />
            <input ref={dateRef} type="date" />
            <select ref={vendorRef} value={vendorName} onChange={(e) => {setVendorName(e.target.value)}}>
              <option>Vendor A</option>
              <option>Vendor B</option>
              <option>Vendor C</option>
            </select>
          </div>
          <div className={styles.generate}>
            <button onClick={()=>{
              generateData()
              setTrigger(true)}}>Generate</button>
          </div>
          <div className={styles.recordsTable}>
            <PurchaseRecordTable trigger={trigger} records={purchaseData} />
          </div>
        </div>
        </div>
  )
}

export default PurchaseRecord