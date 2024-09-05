import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "./SalesTrendChart.module.css"; // Import CSS module
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = ({ salesData }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Group sales by date and calculate total sales per day
    const salesByDate = salesData.reduce((acc, sale) => {
      const date = new Date(sale.salesDate).toLocaleDateString();
      if (acc[date]) {
        acc[date] += sale.totalAmount;
      } else {
        acc[date] = sale.totalAmount;
      }
      return acc;
    }, {});

    // Prepare chart data
    const labels = Object.keys(salesByDate);
    const totalSales = Object.values(salesByDate);

    setChartData({
      labels,
      datasets: [
        {
          label: "Total Sales",
          data: totalSales,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    });
  }, [salesData]);

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Sales Chart</h2>
      <div className={styles.chartWrapper}>
        <Line
          data={chartData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default SalesChart;
