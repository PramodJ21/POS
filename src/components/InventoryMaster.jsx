import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from "./MasterTable.module.css";
import AddMasterData from './AddMasterData';
import EditMasterData from './EditMasterData';

const accessToken = localStorage.getItem('accessToken');

const InventoryMaster = ({ data, setData, refreshData }) => {
    const [addTrigger, setAddTrigger] = useState(false);
    const [editTrigger, setEditTrigger] = useState(false);
    const [editData, setEditData] = useState({});

    const deleteData = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/products/${productId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                credentials: "include",
            });

            const res = await response.json();
            
            if (response.ok) {
                console.log("Data deleted successfully");
                await refreshData(); // Refresh data from server after successful delete
            } else {
                console.log("Data not deleted");
            }

            alert(res.message);
        } catch (error) {
            console.error("Error deleting data:", error);
            alert("An error occurred while deleting the product.");
        }
    };

    const handleUpdate = async (updatedProduct) => {
        try {
            const response = await fetch(`http://localhost:5000/products/${updatedProduct.productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(updatedProduct)
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            await refreshData(); // Refresh data from server after successful update
            setEditTrigger(false);
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        }
    };

    return (
        <div className={styles.table}>
            <table>
                <caption>Inventory Master</caption>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Purchase Price</th>
                        <th>Sale Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.productCode}</td>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.purchasePrice}</td>
                            <td>{item.salesPrice}</td>
                            <td>
                                <button onClick={() => {
                                    setEditData(item);
                                    setEditTrigger(true);
                                }}><FontAwesomeIcon icon={faPen} /></button>
                                <button onClick={() => deleteData(item.productId)}><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.add}>
                <button onClick={() => setAddTrigger(true)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <AddMasterData 
                title="Inventory Master" 
                trigger={addTrigger} 
                setTrigger={setAddTrigger} 
                data={data} 
                setData={setData}
                refreshData={refreshData}
            />
            <EditMasterData 
                title="Edit Inventory Master" 
                trigger={editTrigger} 
                setTrigger={setEditTrigger} 
                editData={editData} 
                onUpdate={handleUpdate}
            />
        </div>
    );
};

export default InventoryMaster;