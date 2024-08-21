import React, { useEffect, useState } from 'react'
import styles from './Masters.module.css'
import Sidebar from './SideBar'
import InventoryMaster from './InventoryMaster'
import ManufacturingMaster from './ManufacturingMaster'


const Masters = () => {
    const [masterData, setMasterData] = useState([])
    useEffect(()=>{
        getMasterData()
    },[])

    const getMasterData = async () => {
        const response = await fetch('http://localhost:3500/masters/get')
        const data = await response.json()
        setMasterData(data)
    }



    const recipesData = [{
        title: "Sinarest",
        ingredients: [
            {
                name: "Paracetamol",
                quantity: "100mg"
            },
            {
                name: "Phenylephrine Hydrochloride",
                quantity: "5mg"
            },
            {
                name: " Chlorpheniramine maleate IP",
                quantity: "2mg"
            }
        ],
        output: 
            {
                name: "Sinarest",
                quantity: "1"
            }
        
    },
    {
        title: "Sinarest",
        ingredients: [
            {
                name: "Paracetamol",
                quantity: "100mg"
            },
            {
                name: "Phenylephrine Hydrochloride",
                quantity: "5mg"
            },
            {
                name: " Chlorpheniramine maleate IP",
                quantity: "2mg"
            }
        ],
        output: 
            {
                name: "Sinarest",
                quantity: "1"
            }
        
    },{
        title: "Sinarest",
        ingredients: [
            {
                name: "Paracetamol",
                quantity: "100mg"
            },
            {
                name: "Phenylephrine Hydrochloride",
                quantity: "5mg"
            },
            {
                name: " Chlorpheniramine maleate IP",
                quantity: "2mg"
            }
        ],
        output: 
            {
                name: "Sinarest",
                quantity: "1"
            }
        
    },{
        title: "Sinarest",
        ingredients: [
            {
                name: "Paracetamol",
                quantity: "100mg"
            },
            {
                name: "Phenylephrine Hydrochloride",
                quantity: "5mg"
            },
            {
                name: " Chlorpheniramine maleate IP",
                quantity: "2mg"
            }
        ],
        output: 
            {
                name: "Sinarest",
                quantity: "1"
            }
        
    },{
        title: "Sinarest",
        ingredients: [
            {
                name: "Paracetamol",
                quantity: "100mg"
            },
            {
                name: "Phenylephrine Hydrochloride",
                quantity: "5mg"
            },
            {
                name: " Chlorpheniramine maleate IP",
                quantity: "2mg"
            }
        ],
        output: 
            {
                name: "Sinarest",
                quantity: "1"
            }
        
    },]

    const [recipes, setRecipes] = useState(recipesData);
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