import React from 'react'
import 'chart.js/auto'; // Required for chart.js
import { Line } from 'react-chartjs-2';

import styles from './PurchaseChart.module.css'
const PurchaseChart = ({ purchaseChartData }) => {
    const sortedData = purchaseChartData.sort((a, b) => new Date(a.date) - new Date(b.date));

    const chartData = {
      labels: sortedData.map((entry) => entry.date), // Dates in ascending order
      datasets: [
        {
          label: 'Quantity Purchased',
          data: sortedData.map((entry) => entry.quantity), // Quantities
          fill: false, // Ensures the area under the line is not filled
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 2,
          tension: 0.1, // Controls the line's curve; 0 means straight lines
          pointRadius: 3, // Adjusts the size of data points
        },
      ],
    };
  
    // Options for the line chart
    const options = {
      responsive: true, // Makes the chart responsive
      maintainAspectRatio: false, // Allows the chart to resize freely
      scales: {
        x: {
          beginAtZero: true, // Start x-axis from zero
          grid: {
            display: false, // Optionally hide grid lines
          },
        },
        y: {
          beginAtZero: true, // Start y-axis from zero
          grid: {
            display: true, // Show grid lines for clarity
          },
          ticks: {
            stepSize: 1, // Adjust step size for clarity, change as needed
          },
        },
      },
      plugins: {
        legend: {
          display: true, // Show legend
          position: 'top', // Position of the legend
        },
        tooltip: {
          enabled: true, // Enable tooltips
        },
      },
    };
  
    return (
      <div className={styles.charts}>
        <div className={styles.chart}>
          <Line data={chartData} options={options} />
        </div>
      </div>
    );
}

export default PurchaseChart