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
 Verma
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow flex items-center">
            <FaMoneyBillWave className="text-green-500 mr-4 text-3xl" />
            <div>
              <h3 className="text-lg font-bold mb-2">Today's Money</h3>
              <div className="text-2xl">$2365</div>
              <div className="text-green-500">+55% than last week</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <FaUser className="text-blue-500 mr-4 text-3xl" />
            <div>
              <h3 className="text-lg font-bold mb-2">Today's Users</h3>
              <div className="text-2xl">56,00</div>
              <div className="text-green-500">+3% than last month</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <FaUsers className="text-red-500 mr-4 text-3xl" />
            <div>
              <h3 className="text-lg font-bold mb-2">New Clients</h3>
              <div className="text-2xl">5,589</div>
              <div className="text-red-500">-2% than yesterday</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex items-center">
            <FaChartLine className="text-purple-500 mr-4 text-3xl" />
            <div>
              <h3 className="text-lg font-bold mb-2">Sales</h3>
              <div className="text-2xl">$212,321</div>
              <div className="text-green-500">+5% than yesterday</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-pink-600 p-4 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Website Views</h3>
            <Line data={viewsData} options={options} />
            <p className="mt-2">Last Campaign Performance</p>
            <p>Updated 2 days ago</p>
          </div>
          <div className="bg-green-500 p-4 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Daily Sales</h3>
            <Line data={salesData} options={options} />
            <p className="mt-2">+15% increase in today sales.</p>
            <p>Updated 4 min ago</p>
          </div>
          <div className="bg-gray-900 p-4 rounded shadow text-white">
            <h3 className="text-lg font-bold mb-2">Completed Tasks</h3>
            <Line data={tasksData} options={options} />
            <p className="mt-2">Last Campaign Performance</p>
            <p>Just updated</p>
          </div>
        </div>
        {/* Projects Section */}
        <div className="bg-white p-4 rounded shadow mt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Projects</h3>
            <span className="text-gray-500">30 done this month</span>
          </div>
          <div className="grid grid-cols-5 text-gray-500 text-sm font-bold mb-2">
            <div>COMPANIES</div>
            <div className="col-span-2">MEMBERS</div>
            <div>BUDGET</div>
            <div>COMPLETION</div>
          </div>
          <div className="space-y-10">
            {/* Project Item 1 */}
            <div className="grid grid-cols-5 items-center">
              <div className="flex items-center space-x-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk9v0P_fvxJdmcDdtrsMBUdlpxpjbuJTn3w&s" alt="company logo" className="w-10 h-10"/>
                <span>Material XD Version</span>
              </div>
              <div className="col-span-2 flex items-center space-x-10">
                <div className="relative group flex items-center">
                  <img src="https://d3pc1xvrcw35tl.cloudfront.net/ln/images/686x514/sundar-pichai-google-ceo_202402690883.jpg" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                  <div className="absolute left-full ml-2 hidden group-hover:block">
                    <div className="flex items-center bg-white text-black p-5 rounded">
                      <span className="text-black">Sundar Pichai</span>
                    </div>
                  </div>
                </div>
                {/* Add more members here */}
              </div>
              <div>$14,000</div>
              <div className="text-center">
                <span className="text-gray-600">60%</span>
                <div className="bg-gray-200 rounded-full h-2.5 w-full mt-2">
                  <div className="bg-pink-600 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
            {/* Add more project items here */}
          </div>
        </div>
      </main>

    <div>
      <h2>Dashboard</h2>
 main
    </div>
  );
};

export default Dashboard;