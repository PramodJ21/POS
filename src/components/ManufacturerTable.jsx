import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ManufacturerTable.module.css'; // Import the CSS module

const ManufacturerTable = () => {
  const [manufacturings, setManufacturings] = useState([]);
  const accessToken = localStorage.getItem("accessToken")
  useEffect(() => {
    // Fetch manufacturing details on component mount
    const getManufacturingDetails = async () => {
        const response = await fetch('https://pharma-erp-backend.onrender.com/manufacturing',
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
        )
        const data = await response.json()
        console.log(data)
        setManufacturings(data)
    }
    getManufacturingDetails()
  }, []);

  const updateManufacturingStatus = async (batchId, newStatus) => {
    try {
        const response = await fetch(`https://pharma-erp-backend.onrender.com/manufacturing/batch/${batchId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        // Update local state after successful status change
        const updatedManufacturings = await response.json();
        setManufacturings(manufacturings.map(m => 
            m.batchId === batchId ? { ...m, status: newStatus } : m
        ));

    } catch (error) {
        console.error('Error updating status:', error);
    }
};


  return (
    <div className={styles.manufacturing_table}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Batch ID</th>
            <th>Product Name</th>
            <th>FG Quantity</th>
            <th>RM Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {manufacturings.map((mfg) => (
            <tr key={mfg.batchId}>
              <td>{new Date(mfg.manufacturingDate).toLocaleDateString()}</td>
              <td>{mfg.batchId}</td>
              <td>{mfg.productName}</td>
              <td>{mfg.FGQuantity}</td>
              <td>{mfg.RMQuantity}</td>
              <td>
                <select
                  value={mfg.status}
                  onChange={(e) => updateManufacturingStatus(mfg.batchId, e.target.value)}
                  disabled={mfg.status === "Completed"} 
                >
                  <option value="Work in Progress">Work in Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManufacturerTable;
