import React from "react";
import "./PurchaseTable.css";
import PieChart from "./PieChart";

const PurchaseTable = () => {
  return (
    <div className="container bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md p-4 rounded-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="card1 w-full lg:w-1/3 flex justify-center items-center">
          <PieChart />
        </div>
        <div className="card2 w-full lg:w-2/3 overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr>
                <th colSpan={6} className="text-2xl bg-gray-900 text-white p-4">
                  Purchase Details
                </th>
              </tr>
              <tr>
                <th>Vendor</th>
                <th>Vendor 1</th>
                <th>Vendor 2</th>
                <th>Vendor 3</th>
                <th>Vendor 4</th>
                <th>Vendor 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-gray-200">Category</th>
                <td>Category 1</td>
                <td>Category 2</td>
                <td>Category 3</td>
                <td>Category 4</td>
                <td>Category 5</td>
              </tr>
              <tr>
                <th>Product</th>
                <td>Product 1</td>
                <td>Product 2</td>
                <td>Product 3</td>
                <td>Product 4</td>
                <td>Product 5</td>
              </tr>
              <tr>
                <th className="bg-gray-200">Quantity</th>
                <td>3</td>
                <td>6</td>
                <td>9</td>
                <td>8</td>
                <td>2</td>
              </tr>
              <tr>
                <th>Purchase Rate</th>
                <td>44</td>
                <td>44</td>
                <td>38</td>
                <td>29</td>
                <td>35</td>
              </tr>
              <tr>
                <th className="bg-gray-200">Sales Rate</th>
                <td>46</td>
                <td>40</td>
                <td>46</td>
                <td>31</td>
                <td>33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTable;
