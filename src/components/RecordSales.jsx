import {useState,useEffect,useRef} from 'react'
import './RecordSales.css'
import CustomerPopUp from './CustomerPopUp.jsx'
import Header from './Header.jsx'
const data = {
    "mp":{
        "code" : "mp",
        "name":"Mudgal Puran",
        "price":100,
        "quantity":1,
    },
    "sp":{
        "code" : "sp",
        "name":"Sudha Puran",
        "price":120,
        "quantity":1,
    },
    "bp":{
        "code" : "bp",
        "name":"Bhagat Puran",
        "price":150,
        "quantity":1,
    },
    "ap":{
        "code" : "ap",
        "name":"Anand Puran",
        "price":200,
        "quantity":1,
    },
    "rp":{
        "code" : "rp",
        "name":"Raj Puran",
        "price":250,
        "quantity":1,
    },
    "jp":{
        "code" : "jp",
        "name":"Jai Puran",
        "price":300,
        "quantity":1,
    },
}




const RecordSales = () => {
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
    const [itemValue, setItemValue] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [popupTrigger, setPopupTrigger] = useState(false);
    const [customerData, setCustomerData] = useState({});
    const [isAdded, setIsAdded] = useState(false);
    const salesInputRef= useRef(null)
    const regexPhone = /^[0-9]{10}$/


    useEffect(() => {
        
        window.addEventListener('keypress', handleKeyPress)
    })

    const handleKeyPress = (e) => {
        console.log(document.activeElement)
        if(e.key === 'Enter'){
            return
        }
        if(document.activeElement === document.body){
        salesInputRef.current.focus()
        }
        
    }
    function addItem(item){
        if(!item){
            setItemValue('')
            alert("Item doesnt exist")
            return
        }
        setTotal(t => t + item.price)
        const newItem = item
        const newItems = [...items]
        const itemIndex = items.findIndex((i) => i.code === item.code)
        
        if(itemIndex !== -1){
            newItems[itemIndex].quantity += 1
        }
        else{
            newItems.push(newItem)
        }
        setItems(newItems)
        setItemValue('')
    }

    function removeItem(item){
        console.log("Item Removed: "+item)
        const newItems = [...items]
        const itemIndex = items.findIndex((i) => i.code === item.code)
        if(itemIndex !== -1){
            setTotal(t => t - item.price * item.quantity)
            newItems.splice(itemIndex, 1)
        }
        
        console.log("Remaining Items: "+newItems)
        setItems(newItems)
    }

    function addCustomer(){

        if(!customerPhone){
            alert("Enter a valid phone number")
            setCustomerPhone('')
        }else if(customerPhone.length !== 10){
            alert("Phone number length should be 10")
            setCustomerPhone('')
        }
        else if(customerData[customerPhone] != null){
            alert("Customer already exists")
            setCustomerPhone('')
        }else if(regexPhone.test(customerPhone) === false){
            alert("Invalid phone number")
            setCustomerPhone('')

        }
        else
        setPopupTrigger(true)   
    }

    function handleSaveData(name,phone,email){
        setCustomerData({...customerData, [phone]:{"name":name, "phone":phone, "email":email}})
        console.log(customerData)
    }
  return (
    <div className='main-sales'>
    <Header title="Record Sales"/>
    <div className='sales'>
    <div className='record-sales'>
        <div className='add-item'>
            <input ref={salesInputRef} type="text" placeholder='Add Item' value={itemValue} onChange={(e) => {setItemValue(e.target.value)}} onKeyDown={(e) =>{
                if(e.key === 'Enter'){
                    addItem(data[itemValue])
                }
            }}></input>
            <button onClick={() => {addItem(data[itemValue])}}>Add</button>
        </div>
        <div className='table'>
            <div className='table-head'>
                <div className='name'>Name</div>
                <div className='price'>Price</div>
                <div className='quantity'>Quantity</div>
                <div className='total'>Total</div>
            </div>
            <div className='table-body'>
                {
                    items.length !== 0 && items.map((item, index) => {
                            return <div key={index} className='sales-item'> 
                            <div className='name'>{item.name}</div>
                            <div className='price'>{item.price}</div>
                            <div  className='quantity'>{item.quantity}</div>
                            <div  className='total'>{item.price * item.quantity}</div>
                            <button onClick={()=>{removeItem(item)}} className='delete-btn'>Delete</button>
                            </div>
                    })
                    
                }
            </div>
            
        </div>
        </div>
        <div className='bill'>
            <div className='create-customer'>
                <input type="text" value={customerPhone} onChange={(e)=>{setCustomerPhone(e.target.value)}} placeholder='Phone Number'></input>
                {
                    isAdded ? 
                    (<button onClick={addCustomer}>Create Customer</button>):
                    (<button onClick={addCustomer}>Add</button>) 
                }
            </div>
            
                <button className='end-sale' onClick={()=>{
                    console.log(customerData)
                    console.log(items)
                    setItems([])
                    setCustomerData({})
                    setTotal(0)
                    setCustomerPhone('')
                    setIsAdded(false)
                }}>Cash Out &nbsp;&nbsp;&nbsp;{total}</button>

        </div>
        <CustomerPopUp trigger={popupTrigger} number={customerPhone} setTrigger={setPopupTrigger} onSave={handleSaveData} setIsAdded={setIsAdded}/>
    </div>
        </div>
  )
}

export default RecordSales