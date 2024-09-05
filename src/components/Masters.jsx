import React, { useEffect, useState } from 'react';
import styles from './Masters.module.css';
import Sidebar from './SideBar';
import InventoryMaster from './InventoryMaster';
import ManufacturingMaster from './ManufacturingMaster';

const Masters = () => {
    const [masterData, setMasterData] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getMasterData();
        getRecipesData();
    }, []);

    const getMasterData = async () => {
        try {
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();

            // Validate that data is an array
            if (Array.isArray(data)) {
                setMasterData(data);
            } else {
                console.error('Unexpected data format for products:', data);
                setMasterData([]);
            }
        } catch (error) {
            console.error('Error fetching master data:', error);
            setMasterData([]); // Set to empty array on error
        }
    };

    const getRecipesData = async () => {
        try {
            const response = await fetch('http://localhost:5000/recipes');
            const data = await response.json();

            // Validate that data is an array
            if (Array.isArray(data)) {
                setRecipes(data);
            } else {
                console.error('Unexpected data format for recipes:', data);
                setRecipes([]);
            }
        } catch (error) {
            console.error('Error fetching recipes data:', error);
            setRecipes([]); // Set to empty array on error
        }
    };

    return (
        <div className={styles.masters}>
            <Sidebar />
            <main className={styles.main}>
                <h1>Masters</h1>
                <div className={styles.masterTable}>
                    <InventoryMaster data={masterData} setData={setMasterData}/>
                    <div className={styles.manufacturingMaster}>
                        <h2>Manufacturing Master</h2>
                        <ManufacturingMaster data={recipes} setData={setRecipes}/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Masters;
