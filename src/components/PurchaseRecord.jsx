import React, { useState,useEffect,useRef} from 'react'
import styles from './PurchaseRecord.module.css'
import Header from './Header'
import PurchaseRecordTable from './PurchaseRecordTable'
const accessToken = localStorage.getItem('accessToken')
console.log(accessToken)
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
        const response = await fetch('http://localhost:5000/products',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
        }
        )
        const data = await response.json()
        console.log(data)
        setMasterData(data)
    }

    const generateData = async () =>{
      const foundData = masterData.find(data=>data.productName === productRef.current.value)
      console.log(masterData)
      if(vendorName === "" ||productRef.current.value=== "" || qtyRef.current.value === "" ) {
        alert("Please fill all the fields")
        return
      }
      
      const sendData = {
        "productId": foundData.productId,
        "supplier": vendorName,
        "quantity": qtyRef.current.value,

      }

      const response = await fetch("http://localhost:5000/purchase",{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body:JSON.stringify(sendData)
      })
      
      const data = await response.json()
      if(!data){
        alert("Error storing data")
      }
      console.log(data)

      setPurchaseData(data.purchasedProducts)
      console.log(purchaseData)
      setTrigger(true)
    }
  return (
    <div className={styles.purchaseRecord}>
      <Header title="Record Purchase"/>
        <div className={styles.records}>
          <div className={styles.inputs}>
          <select ref={productRef} value={productName} onChange={(e) => {setProductName(e.target.value)}}>
              {masterData.map((item,index)=>{
                if (item.category != "Finished Product") return <option key={index}>{item.productName}</option>
              })}
            </select>
            <input ref={qtyRef} type="text" placeholder="Qty" />
            {/* <input  type="text" placeholder="Rate" /> */}
            {/* <input ref={dateRef} type="date" /> */}
            <input ref={vendorRef} type='text' value={vendorName} onChange={(e) => {setVendorName(e.target.value)}} placeholder='Supplier'/>
          </div>
          <div className={styles.generate}>
            <button onClick={()=>{
              generateData()
              }}>Generate</button>
          </div>
          <div className={styles.recordsTable}>
            <PurchaseRecordTable trigger={trigger} records={purchaseData} />
          </div>
        </div>
        </div>
  )
}

export default PurchaseRecord