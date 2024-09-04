import React from 'react'
import styles from './ManufacturingTable.module.css'
const ManufacturingTable = ({realData, data}) => {
    const allIngredients = Array.from(new Set(realData.flatMap(detail => detail.ingredients.map(ing => ing.productName))));

  return (
    <div className={styles.manufacturingDetailsTable}>
      <table>
        <thead>
          <tr>
            <th>Batch ID</th>
            {allIngredients.map((ingredient, index) => (
              <th key={index}>{ingredient} Quantity</th>
            ))}
            <th>Manufactured Quantity</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {realData.map((detail, index) => (
            <tr key={index}>
              <td>{detail.batchId}</td>
              {allIngredients.map((ingredient, iIndex) => {
                const ingredientDetail = detail.ingredients.find(ing => ing.productName === ingredient);
                return (
                  <td key={iIndex}>
                    {ingredientDetail ? ingredientDetail.quantity : 0}
                  </td>
                );
              })}
              <td>{detail.manufacturedQuantity}</td>
              <td>{detail.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ManufacturingTable