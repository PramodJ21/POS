import React, { useState, useEffect } from 'react';
import styles from './EditMasterData.module.css';

const EditMasterData = (props) => {
    const [data, setData] = useState({
        productCode: '',
        name: '',
        category: '',
        uom: '',
        purchasePrice: '',
        salesPrice: ''
    });

    useEffect(() => {
        if (props.editData) {
            console.log('Edit data:', props.editData);
            setData({
                productCode: props.editData.productCode || '',
                productName: props.editData.productName || '',
                category: props.editData.category || '',
                uom: props.editData.uom || '',
                purchasePrice: props.editData.purchasePrice || '',
                salesPrice: props.editData.salesPrice || '',
            });
        }
    }, [props.editData]);

    const handleSubmit = async () => {
        if(Object.values(data).some(field => field === '')) {
            alert('Please fill all fields');
            return;
        }

        try {
            const response = await fetch(`https://pharma-erp-backend.onrender.com/products/${props.editData.productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const updatedProduct = await response.json();
            props.onUpdate(updatedProduct);
            props.setTrigger(false);
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        }
    };

    return (
        props.trigger ? (
            <div className={styles.popup}>
                <div className={styles.inner}>
                    <h1>{props.title || 'Edit Product'}</h1>
                    <input 
                        type="text" 
                        value={data.productCode} 
                        onChange={(e) => setData({ ...data, productCode: e.target.value })} 
                        placeholder="Product No" 
                    />
                    <input 
                        type="text" 
                        value={data.productName} 
                        onChange={(e) => setData({ ...data, productName: e.target.value })} 
                        placeholder="Product Name" 
                    />
                    <select 
                        value={data.category} 
                        onChange={(e) => setData({ ...data, category: e.target.value })}
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="TP">Trading Product</option>
                        <option value="FP">Finished Product</option>
                        <option value="RM">Raw Material</option>
                    </select>
                    <select 
                        value={data.uom} 
                        onChange={(e) => setData({ ...data, uom: e.target.value })}
                    >
                        <option value="" disabled>Select UOM</option>
                        <option value="mg">MilliGrams</option>
                        <option value="gm">Grams</option>
                        <option value="kg">KiloGrams</option>
                    </select>
                    <input 
                        type="number" 
                        value={data.purchasePrice} 
                        onChange={(e) => setData({ ...data, purchasePrice: e.target.value })} 
                        placeholder="Purchase Price" 
                    />
                    <input 
                        type="number" 
                        value={data.salesPrice} 
                        onChange={(e) => setData({ ...data, salesPrice: e.target.value })} 
                        placeholder="Sell Price" 
                    />
                    <button onClick={handleSubmit}>Update</button>
                    <button onClick={() => props.setTrigger(false)} className={styles.cancelBtn}>
                        Cancel
                    </button>
                </div>
            </div>
        ) : null
    );
};

export default EditMasterData;
