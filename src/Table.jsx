import React from 'react';

const Table = () => {
  const handleEditClick = (itemName) => {
    alert(`Edit ${itemName}`);
    // Implement edit functionality here
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="m-1 w-full max-w-5xl border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-purple-600 text-white italic">
            <th className="p-4 text-left font-bold text-xl">ITEM NAME</th>
            <th className="p-4 text-left font-bold text-xl">PURCHASE AMOUNT</th>
            <th className="p-4 text-left font-bold text-xl">ITEM QUANTITY</th>
            <th className="p-4 text-left font-bold text-xl">TOTAL</th>
            <th className="p-4 text-left font-bold text-xl"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-100 hover:bg-gray-300">
            <td className="p-6 border-b border-gray-200 font-bold">Apple MacBook Pro 17</td>
            <td className="p-6 border-b border-gray-200">Silver</td>
            <td className="p-6 border-b border-gray-200">Laptop</td>
            <td className="p-6 border-b border-gray-200">$999</td>
            <td className="p-6 border-b border-gray-200">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEditClick('Apple MacBook Pro 17')}>Edit</button>
            </td>
          </tr>
          <tr className="even:bg-gray-100 hover:bg-gray-300">
            <td className="p-6 border-b border-gray-200 font-bold">Microsoft Surface Pro</td>
            <td className="p-6 border-b border-gray-200">White</td>
            <td className="p-6 border-b border-gray-200">Laptop Pc</td>
            <td className="p-6 border-b border-gray-200">$1999</td>
            <td className="p-6 border-b border-gray-200">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEditClick('Microsoft Surface Pro')}>Edit</button>
            </td>
          </tr>
          <tr className="even:bg-gray-100 hover:bg-gray-300">
            <td className="p-6 border-b border-gray-200 font-bold">Magic Mouse 2</td>
            <td className="p-6 border-b border-gray-200">Black</td>
            <td className="p-6 border-b border-gray-200">Accessories</td>
            <td className="p-6 border-b border-gray-200">$99</td>
            <td className="p-6 border-b border-gray-200">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEditClick('Magic Mouse 2')}>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
