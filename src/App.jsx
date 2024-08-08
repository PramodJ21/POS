import './App.css'
import { Routes, Route } from 'react-router-dom'
import RecordSales from './components/RecordSales.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import Purchase from './components/Purchase.jsx'
import UserManagement from './components/UserManagement.jsx'
import Inventory from './components/Inventory.jsx'
import Sales from './components/Sales.jsx'
import Manufacturing from './components/Manufacturing.jsx'
import Masters from './components/Masters.jsx'
import PurchaseRecord from './components/PurchaseRecord.jsx'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/purchase" element={<Purchase />}/>
      <Route path="/inventory" element={<Inventory />}/>
      <Route path="/sales" element={<Sales />}/>
      <Route path="/manufacturing" element={<Manufacturing />}/>
      <Route path="/masters" element={<Masters />}/>
      <Route path="/user-management" element={<UserManagement />}/>
      <Route path="/record-sales" element={<RecordSales />}/>
      <Route path="/record-purchase" element={<PurchaseRecord />}/>
    </Routes>
  )
}

export default App
