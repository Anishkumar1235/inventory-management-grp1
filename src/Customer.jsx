import React from 'react';
import Card from './Card';
import { FaBox, FaBoxOpen, FaCogs, FaChartLine, FaIndustry, FaChartBar } from 'react-icons/fa';

const Customer = () => {

  const graphData = [
    { label: 'Stock', value: 150 },
    { label: 'Reorder', value: 100 },
    { label: 'Discontinued', value: 50 },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
      <Card icon={<FaBox />} number="7" description="Products to Reorder" />
      <Card icon={<FaBoxOpen />} number="365" description="Quantity to be Reorded" />
      <Card icon={<FaCogs />} number="45" description="Discontinued Product" />

      
      <Card icon={<FaChartLine />} number="1494" description="Current Stock" type="stock" />
      <Card icon={<FaChartLine />} number="2" description="Zero Stock Products" type="stock" />

      
      <Card icon={<FaCogs />} number="45,626" description="Stock Current Value" type="value" />

      
      <Card icon={<FaIndustry />} number="16" description="Suppliers" type="supplier" />
      <Card icon={<FaBox />} number="37" description="Products" type="Product" />

    
      <Card
        icon={<FaChartBar />}
        number="Product By Status"
        description={
          <>
            Stock-70%<br />
            Reorder-27%<br />
            Discontinued Data-3%
          </>
        }
        type="graph"
        data={graphData}
      />
    </div>
  );
};

export default Customer;
