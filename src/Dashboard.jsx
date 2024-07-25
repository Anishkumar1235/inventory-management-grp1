import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { FaMoneyBillWave, FaUser, FaUsers, FaChartLine } from 'react-icons/fa';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  return (

    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow flex items-center">
            <FaMoneyBillWave className="text-green-500 mr-4 text-3xl" />
            <div>
              <h3 className="text-lg font-bold mb-2">Today's Money</h3>
              <div className="text-2xl">$25k</div>
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
              <span className="text-black"></span>
            </div>
          </div>
        </div>
        <div className="relative group flex items-center  space-x-10">
          <img src="https://www.livemint.com/lm-img/img/2024/02/15/600x338/Europe-Google-0_1707995416858_1707995449111.jpg" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black">Sundar Pichai</span>
            </div>
          </div>
        </div>
      </div>
      <div>$14,000</div>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div className="bg-blue-500 h-2.5 rounded" style={{ width: '60%' }}></div>
        </div>
        <span className="ml-2">60%</span>
      </div>
    </div>
    {/* Project Item 2 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center space-x-2">
        <img src="https://s3-alpha.figma.com/hub/file/2721803157/3f021816-bde1-4634-80b3-52d7f762bc6b-cover.png" alt="company logo" className="w-10 h-10"/>
        <span>Add Progress Track</span>
      </div>
      <div className="col-span-2 flex items-center space-x-10">
        <div className="relative group flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNouSYF7SGHOcJxxOF7XyyMbzyNWD5abuwjQ&s" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black"></span>
            </div>
          </div>
        </div>
        <div className="relative group flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNouSYF7SGHOcJxxOF7XyyMbzyNWD5abuwjQ&s" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black">Modi</span>
            </div>
          </div>
        </div>
      </div>
      <div>$3,000</div>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div className="bg-green-500 h-2.5 rounded" style={{ width: '10%' }}></div>
        </div>
        <span className="ml-2">10%</span>
      </div>
    </div>
    {/* Project Item 3 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center space-x-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCNqP4275ZwTIEFspbn3ZLWul3m0Ur8asw1esbTkzFtDow9g1xz1ZTBUJOlEVTIkSu2s&usqp=CAU" alt="company logo" className="w-10 h-10"/>
        <span>Fix Platform Errors</span>
      </div>
      <div className="col-span-2 flex items-center space-x-10">
        <div className="relative group flex items-center">
          <img src="https://img.jagranjosh.com/imported/images/E/GK/dhoni-records-odi.webp" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black"></span>
            </div>
          </div>
        </div>
        <div className="relative group flex items-center">
          <img src="https://img.jagranjosh.com/imported/images/E/GK/dhoni-records-odi.webp" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-2 rounded">
              <span className="text-black">Ms Dhoni</span>
            </div>
          </div>
        </div>
      </div>
      <div>Not set</div>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div className="bg-red-500 h-2.5 rounded" style={{ width: '100%' }}></div>
        </div>
        <span className="ml-2">100%</span>
      </div>
    </div>
    {/* Project Item 4 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center space-x-2">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/46190b63764575.5abb892616e9e.jpg" alt="company logo" className="w-10 h-10"/>
        <span>Launch our Mobile App</span>
      </div>
      <div className="col-span-2 flex items-center space-x-10">
        <div className="relative group flex items-center">
          <img src="https://c.ndtvimg.com/2024-04/rhcmc49_s_625x300_28_April_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black"></span>
            </div>
          </div>
        </div>
        <div className="relative group flex items-center">
          <img src="https://c.ndtvimg.com/2024-04/rhcmc49_s_625x300_28_April_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black">virat</span>
            </div>
          </div>
        </div>
      </div>
      <div>$20,600</div>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded" style={{ width: '50%' }}></div>
        </div>
        <span className="ml-2">50%</span>
      </div>
    </div>
    {/* Project Item 5 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center space-x-2">
        <img src="https://de.sothink.com/page/logo-design/images/Koloroo.jpg" alt="company logo" className="w-10 h-10"/>
        <span>Add the New Pricing Page</span>
      </div>
      <div className="col-span-2 flex items-center space-x-10 ">
        <div className="relative group flex items-center">
          <img src="https://c.ndtvimg.com/2024-07/fkontq9_hardik-pandya-_625x300_04_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black"></span>
            </div>
          </div>
        </div>
        <div className="relative group flex items-center">
          <img src="https://c.ndtvimg.com/2024-07/fkontq9_hardik-pandya-_625x300_04_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605," alt="member avatar" className="w-10 h-10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"/>
          <div className="absolute left-full ml-2 hidden group-hover:block">
            <div className="flex items-center bg-white text-black p-5 rounded">
              <span className="text-black">Hardik</span>
            </div>
          </div>
        </div>
      </div>
      <div>$500</div>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div className="bg-blue-500 h-2.5 rounded" style={{ width: '25%' }}></div>
        </div>
        <span className="ml-2">25%</span>
      </div>
    </div>
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
