import {useState} from 'react'
import './CustomerPopUp.css'
const CustomerPopUp = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return ((props.trigger) ?
    (

   <div className='popup'>
        <div className='inner'>
            <h1>Customer Information</h1>
            <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Name'></input>
            <input type='text' placeholder='Phone Number' defaultValue={props.number} onChange={null}></input>
            <input type='text' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email Address'></input>
            <button onClick={()=>{
              props.setTrigger(false)
              props.onSave(name,props.number,email)
              props.setIsAdded(true)
            }}>Save</button>
        </div>
   </div>
    
) : ''
  )
}

export default CustomerPopUp