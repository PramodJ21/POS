import './App.css';
import { Routes, Route } from 'react-router-dom';
import RecordSales from './components/RecordSales.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Purchase from './components/Purchase.jsx';
import UserManagement from './components/UserManagement.jsx';
import Inventory from './components/Inventory.jsx';
import Sales from './components/Sales.jsx';
import Manufacturing from './components/Manufacturing.jsx';
import Masters from './components/Masters.jsx';
import PurchaseRecord from './components/PurchaseRecord.jsx';
import UnAuthorized from './components/UnAuthorized.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            element={Dashboard}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/purchase"
        element={
          <ProtectedRoute
            element={Purchase}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/inventory"
        element={
          <ProtectedRoute
            element={Inventory}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/sales"
        element={
          <ProtectedRoute
            element={Sales}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/manufacturing"
        element={
          <ProtectedRoute
            element={Manufacturing}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/masters"
        element={
          <ProtectedRoute
            element={Masters}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/user-management"
        element={
          <ProtectedRoute
            element={UserManagement}
            rolesAllowed={["01"]}
          />
        }
      />
      <Route
        path="/record-sales"
        element={
          <ProtectedRoute
            element={RecordSales}
            rolesAllowed={["02"]}
          />
        }
      />
      <Route
        path="/record-purchase"
        element={
          <ProtectedRoute
            element={PurchaseRecord}
            rolesAllowed={["03"]}
          />
        }
      />
      <Route path="/unauthorized" element={<UnAuthorized />} />
    </Routes>
  );
}

export default App;
