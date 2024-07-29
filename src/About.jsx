import React from 'react';

const About = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg m-4 p-4 w-64 transform transition-transform duration-300 ease-in-out hover:translate-y-10 hover:shadow-custom">
      <h2 className="text-black text-xl mb-2">Purchase Number - 2345</h2>
      <div className="text-black">
        <p>Date - 29/07/2024</p>
        <p>GSTIN - 84362057563782</p>
        <p>Address - TATA</p>
        <p>Contact Number - 9857790476</p>
      </div>
    </div>
  );
}

export default About;
