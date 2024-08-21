import { useState, useEffect, useRef } from 'react';
import './RecordSales.css';
import CustomerPopUp from './CustomerPopUp.jsx';
import Header from './Header.jsx';


const data = {}
// const data = {
//   paracetamol: {
//     code: 'paracetamol',
//     name: 'Paracetamol',
//     price: 10,
//     quantity: 1,
//   },
//   ibuprofen: {
//     code: 'ibuprofen',
//     name: 'Ibuprofen',
//     price: 15,
//     quantity: 1,
//   },
//   aspirin: {
//     code: 'aspirin',
//     name: 'Aspirin',
//     price: 20,
//     quantity: 1,
//   },
//   antacid: {
//     code: 'antacid',
//     name: 'Antacid',
//     price: 5,
//     quantity: 1,
//   },
//   cough_syrup: {
//     code: 'cough_syrup',
//     name: 'Cough Syrup',
//     price: 25,
//     quantity: 1,
//   },
//   vitamin_c: {
//     code: 'vitamin_c',
//     name: 'Vitamin C',
//     price: 8,
//     quantity: 1,
//   },
// };

const RecordSales = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [popupTrigger, setPopupTrigger] = useState(false);
  const [customerData, setCustomerData] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const salesInputRef = useRef(null);
  const addButtonRef = useRef(null);
  const regexPhone = /^[0-9]{10}$/;
  

    const getMasterData = async () => {
        const response = await fetch('http://localhost:3500/masters/get')
        const data_ = await response.json()
        data_.forEach((item,index) =>{
          data[item.no] = {"code":item.no,"name":item.name,"price":item.sellPrice,"quantity":1}
        } )
        console.log(data)
    }

  useEffect(() => {
    getMasterData()
    
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      return;
    }
    if (document.activeElement === document.body) {
      salesInputRef.current.focus();
    }
  };

  function addItem(item) {
    if (!item) {
      setItemValue('');
      alert('Item does not exist');
      return;
    }
    setTotal((t) => t + item.price);
    const newItems = [...items];
    const itemIndex = items.findIndex((i) => i.code === item.code);

    if (itemIndex !== -1) {
      newItems[itemIndex].quantity += 1;
    } else {
      newItems.push(item);
    }
    setItems(newItems);
    setItemValue('');
  }

  function removeItem(item) {
    const newItems = [...items];
    const itemIndex = items.findIndex((i) => i.code === item.code);
    if (itemIndex !== -1) {
      setTotal((t) => t - item.price * item.quantity);
      newItems.splice(itemIndex, 1);
    }
    setItems(newItems);
  }

  function addCustomer() {
    if (!customerPhone) {
      alert('Enter a valid phone number');
      setCustomerPhone('');
    } else if (customerPhone.length !== 10) {
      alert('Phone number length should be 10');
      setCustomerPhone('');
    } else if (customerData[customerPhone] != null) {
      alert('Customer already exists');
      setCustomerPhone('');
    } else if (regexPhone.test(customerPhone) === false) {
      alert('Invalid phone number');
      setCustomerPhone('');
    } else {
      setPopupTrigger(true);
    }
  }

  function handleSaveData(name, phone, email) {
    
    setCustomerData({ ...customerData, [phone]: { name, phone, email } });
  }

  function handleEndSale() {
    if(!isAdded){
        alert("Customer must be added first.")
        return
    }
    if(items.length == 0){
        alert("Add items to the cart first.")
        return
    }
    const newSale = {
      items: [...items],
      customer: customerData[customerPhone] || { phone: customerPhone }, // Fallback if customer not added
      date: new Date().toISOString(), // Current date and time
    };

    console.log('Completed Sale:', newSale);
    const response = fetch("http://localhost:3500/storeSales",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSale)
    }
    )
    // Reset the states after the sale is recorded
    setItems([]);
    setCustomerData({});
    setTotal(0);
    setCustomerPhone('');
    setIsAdded(false);
  }

  return (
    <div className="main-sales">
      <Header title="Record Sales" />
      <div className="sales">
        <div className="record-sales">
          <div className="add-item">
            <input
              ref={salesInputRef}
              type="text"
              placeholder="Add Item"
              value={itemValue}
              onChange={(e) => {
                setItemValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addItem(data[itemValue.toUpperCase()]);
                }
              }}
            />
            <button onClick={() => addItem(data[itemValue.toUpperCase()])}>
              Add
            </button>
          </div>
          <div className="table">
            <div className="table-head">
              <div className="name">Name</div>
              <div className="price">Price</div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="table-body">
              {items.length !== 0 &&
                items.map((item, index) => {
                  return (
                    <div key={index} className="sales-item">
                      <div className="name">{item.name}</div>
                      <div className="price">{item.price}</div>
                      <div className="quantity">{item.quantity}</div>
                      <div className="total">
                        {item.price * item.quantity}
                      </div>
                      <button
                        onClick={() => {
                          removeItem(item);
                        }}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="bill">
          <div className="create-customer">
            <input
              type="text"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Phone Number"
            />
            {isAdded ? (
              <p onClick={addCustomer}>Customer Added</p>
            ) : (
              <button onClick={addCustomer}>Add</button>
            )}
          </div>

          <button className="end-sale" onClick={handleEndSale}>
            Cash Out &nbsp;&nbsp;&nbsp;{total}
          </button>
        </div>
        <CustomerPopUp
          trigger={popupTrigger}
          number={customerPhone}
          setTrigger={setPopupTrigger}
          onSave={handleSaveData}
          setIsAdded={setIsAdded}
        />
      </div>
    </div>
  );
};

export default RecordSales;
