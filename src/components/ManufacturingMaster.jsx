import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './ManufacturingMaster.module.css'

const ManufacturingMaster = (props) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.recipes}>
            {props.data.map(
                (recipe,index) => {
                    return (
                        <div key={index} className={styles.recipe}>
                            <h2 className={styles.title}>{recipe.title}</h2>
                            <div className={styles.ingredients}>
                                <h3>Ingredients</h3>
                                <ul>
                                      {recipe.ingredients.map(
                                        (ingredient,index) => {
                                            return (
                                                <li key={index}>
                                                    {ingredient.name} x {ingredient.quantity}
                                                </li>
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                            <div className={styles.output}>
                                <h3>Output</h3>
                                <p>{recipe.output.name} - {recipe.output.quantity}</p>
                            </div>
                        </div>
                    )
                }
            )}
            <div className={styles.add}>
                <button><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
        
    </div>
  )
}

export default ManufacturingMaster