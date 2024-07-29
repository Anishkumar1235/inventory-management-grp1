import React from 'react';

const Supplier = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-300 to-blue-300 shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Supplier</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Supplier Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Supplier Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Short Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Short Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Details Type */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Details Type</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="detailsType" className="form-radio text-blue-600" /> 
                <span className="ml-2 text-gray-700">Global</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="detailsType" className="form-radio text-blue-600" /> 
                <span className="ml-2 text-gray-700">Local</span>
              </label>
            </div>
          </div>
          
          {/* Reference No. */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Reference No.</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Supplier Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Supplier Address</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Postcode */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Postcode</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Email Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Phone No */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone No</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Fax No */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Fax No</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Sales Rep */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Sales Rep</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Sales Rep Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Sales Rep Contact</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Sales Rep Email Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Sales Rep Email Address</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Supplier Notes */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Supplier Notes</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          
          {/* Minimum Order Limit */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Minimum Order Limit</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          
          {/* Delivery Days */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Delivery Days</label>
            <div className="flex flex-wrap">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <label key={day} className="inline-flex items-center mr-4 mb-2">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-gray-700">{day}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Linked Supplier */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Linked Supplier</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-3 shadow-sm bg-gray-100 text-gray-500 cursor-not-allowed" disabled value="Not Applicable" />
          </div>
        </div>
        <div className="mt-8">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Supplier;
