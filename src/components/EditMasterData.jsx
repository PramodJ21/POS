import React, { useState, useEffect } from 'react';
import styles from './EditMasterData.module.css';

const EditMasterData = (props) => {
    const [data, setData] = useState({
        no: '',
        name: '',
        category: '',
        uom: '',
        purchasePrice: '',
        sellPrice: ''
    });

    useEffect(() => {
        if (props.editData) {
            setData({
                no: props.editData.no || '',
                name: props.editData.name || '',
                category: props.editData.category || '',
                uom: props.editData.uom || '',
                purchasePrice: props.editData.purchasePrice || '',
                sellPrice: props.editData.sellPrice || '',
            });
        }
    }, [props.editData]);

    return (
        (props.trigger) ? (
            <div className={styles.popup}>
                <div className={styles.inner}>
                    <h1>{props.title}</h1>
                    <input 
                        type="text" 
                        value={data.no} 
                        onChange={(e) => setData({ ...data, no: e.target.value })} 
                        placeholder="Product No" 
                    />
                    <input 
                        type="text" 
                        value={data.name} 
                        onChange={(e) => setData({ ...data, name: e.target.value })} 
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
                        type="text" 
                        value={data.purchasePrice} 
                        onChange={(e) => setData({ ...data, purchasePrice: e.target.value })} 
                        placeholder="Purchase Price" 
                    />
                    <input 
                        type="text" 
                        value={data.sellPrice} 
                        onChange={(e) => setData({ ...data, sellPrice: e.target.value })} 
                        placeholder="Sell Price" 
                    />
                    <button onClick={()=>{
                        if(data.no === '' || data.name === '' || data.category === '' || data.uom === '' || data.purchasePrice === '' || data.sellPrice === ''){
                            alert('Please fill all fields')
                            return
                        }
                        else{
                            var tempData = props.data
                            tempData = tempData.filter(item => item.no !== props.editData.no)

                            props.setData([...tempData, data])
                            props.setTrigger(false)
                        }
                    }}>Edit</button>
                    <button onClick={() => props.setTrigger(false)} className={styles.cancelBtn}>
                        Cancel
                    </button>
                </div>
            </div>
        ) : ""
    );
};

export default EditMasterData;
