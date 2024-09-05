// src/components/TopSellingProductsChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const TopSellingProductsChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item._id), // Product names or IDs
    datasets: [{
      label: 'Total Revenue',
      data: data.map(item => item.totalRevenue),
      backgroundColor: 'rgba(153,102,255,0.2)',
      borderColor: 'rgba(153,102,255,1)',
      borderWidth: 1,
    }],
  };

  return <Bar data={chartData} />;
};

export default TopSellingProductsChart;
