import React, { useEffect, useState } from 'react'
import styles from './Masters.module.css'
import Sidebar from './SideBar'
import InventoryMaster from './InventoryMaster'
import ManufacturingMaster from './ManufacturingMaster'


const Masters = () => {
    const [masterData, setMasterData] = useState([])
    useEffect(()=>{
        getMasterData()
        getRecipesData()
    },[])

    const getMasterData = async () => {
        const response = await fetch('http://localhost:5000/products')
        const data = await response.json()
        setMasterData(data)
    }
    

   const getRecipesData = async () =>{
        const response = await fetch('http://localhost:5000/recipes')
        const data = await response.json()
        setRecipes(data)
   }

    const [recipes, setRecipes] = useState([]);
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
  )
}

export default Masters