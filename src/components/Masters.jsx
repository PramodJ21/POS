import React, { useState } from 'react'
import styles from './Masters.module.css'
import Sidebar from './SideBar'
import InventoryMaster from './InventoryMaster'
import ManufacturingMaster from './ManufacturingMaster'


const Masters = () => {
    const data1 =[
        {
            "no":"TP-PARA",
            "name":"Paracetamol",
            "category":"Trading Product",
            "uom":"grams",
            "purchasePrice":"10Rs",
            "sellPrice":"20Rs"
        },
        {
            "no":"FG-SINA",
            "name":"Sinarest",
            "category":"Finished Product",
            "uom":"grams",
            "purchasePrice":"-",
            "sellPrice":"40Rs"
        },
        {
            "no":"RM-PARAIP",
            "name":"Paracetamol IP",
            "category":"Raw Material",
            "uom":"milligrams",
            "purchasePrice":"100Rs",
            "sellPrice":"-"
        },
        {
            "no":"RM-PHIP",
            "name":"Phenylephrine Hydrochloride IP",
            "category":"Raw Material",
            "uom":"grams",
            "purchasePrice":"100Rs",
            "sellPrice":"-"
        }
    ]

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
    const [inventoryData, setInventoryData] = useState(data1);
  return (
    <div className={styles.masters}>
        <Sidebar />
        <main className={styles.main}>
        <h1>Masters</h1>
        <div className={styles.masterTable}>
            <InventoryMaster data={inventoryData} setData={setInventoryData}/>
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