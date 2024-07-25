// src/Dashboard.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the line chart
const data = [
  { name: 'Dec 01', teamA: 30, teamB: 20 },
  { name: 'Dec 02', teamA: 45, teamB: 35 },
  { name: 'Dec 03', teamA: 30, teamB: 25 },
  { name: 'Dec 04', teamA: 50, teamB: 40 },
  { name: 'Dec 05', teamA: 35, teamB: 30 },
  { name: 'Dec 06', teamA: 55, teamB: 45 },
  { name: 'Dec 07', teamA: 40, teamB: 35 },
  { name: 'Dec 08', teamA: 60, teamB: 50 },
  { name: 'Dec 09', teamA: 45, teamB: 40 },
  { name: 'Dec 10', teamA: 65, teamB: 55 },
  { name: 'Dec 11', teamA: 50, teamB: 45 },
];

const Dashboard = () => {
  return (
    <div
      className="p-8 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900?technology)' }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Dashboard</h1>
        <div className="grid grid-cols-4 gap-8 mb-8">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="bg-blue-500 p-6 rounded-lg shadow-lg text-white">
              <div className="flex justify-between items-center mb-2">
                <div className="text-5xl font-bold">4,510</div>
                <div className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-lg">+30%</div>
              </div>
              <div className="text-lg">Item Sales</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Performance Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="teamA" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="teamB" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <div className="w-3/4 h-3/4 relative">
              {/* Placeholder for Donut Chart */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl mb-2">Total</div>
                <div className="text-5xl font-bold">249</div>
                <div className="text-sm mt-2">Donut Chart Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


