
import React from 'react';
import PurchaseTable from './components/PurchaseTable';
import Buy from './components/Buy';


const Customer = () => {
  return (

    <div>
      <h1 className='text-4xl font-bold text-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  text-white
       p-4 shadow-lg rounded-lg'>CUSTOMER</h1><br />
      <p className='text-xl font-bold text-blue-800'>Content for Customer goes here.</p>
      <br />
        <Buy />
        <PurchaseTable />

    </div>

  );
};

export default Customer;
