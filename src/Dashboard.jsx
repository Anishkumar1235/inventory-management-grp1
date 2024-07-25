import React from 'react';

const Dashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  const viewsData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Views',
        data: [12, 19, 3, 5, 2, 3, 9],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const salesData = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 200, 400, 500, 450, 600],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const tasksData = {
    labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Completed Tasks',
        data: [50, 60, 55, 70, 65, 75, 70, 80, 90],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;