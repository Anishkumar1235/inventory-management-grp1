// src/components/Sales.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Sales = () => {
  // Data for Sales Report Bar Chart
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: '#fef08a',
      },
    ],
  };

  // Data for Category Wise Stock Pie Chart
  const stockData = {
    labels: ['Electronics', 'Books', 'Clothing', 'Home & Kitchen', 'Toys'],
    datasets: [
      {
        label: 'Stock',
        data: [120, 150, 90, 60, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  // Data for Top Selling Products Column Chart
  const topSellingProductsData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: 'Top Selling Products',
        data: [300, 250, 200, 150, 100],
        backgroundColor: '#fef08a',
      },
    ],
  };

  // Data for Product Details Pie Chart
  const productDetailsData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Product Details',
        data: [120, 90, 60],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-4  ">
      <h1 className="text-3xl font-bold mb-4 text-center">Sales </h1>
      
      <div className="flex flex-wrap -mx-4   ">
        {/* Sales Report Bar Chart */}
        <div className="chart-container w-full md:w-1/2 p-4 bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-center">Sales Report</h2>
          <div className="w-full max-w-lg mx-auto">
            <Bar data={salesData} />
          </div>
        </div>
        
        {/* Category Wise Stock Pie Chart */}
        <div className="chart-container w-full md:w-1/2 p-4 bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-center">Category Wise Stock</h2>
          <div className="w-60 max-w-lg mx-auto">
            <Pie data={stockData} />
          </div>
        </div>
        
        {/* Top Selling Products Column Chart */}
        <div className="chart-container w-full md:w-1/2 p-4 bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-center">Top Selling Products</h2>
          <div className="w-full max-w-lg mx-auto">
            <Bar data={topSellingProductsData} options={{ indexAxis: 'y' }} />
          </div>
        </div>
        
        {/* Product Details Pie Chart */}
        <div className="chart-container w-full md:w-1/2 p-4 bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md">
          <h2 className="text-xl font-bold mb-2 text-center">Product Details</h2>
          <div className="w-60 max-w-lg mx-auto ">
            <Pie data={productDetailsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
