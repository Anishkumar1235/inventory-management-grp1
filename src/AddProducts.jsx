import React from 'react';

const AddProducts = () => {
  return (
    <div className="flex justify-center rounded-lg items-center min-h-screen bg-gradient-to-r from-green-300 to-blue-300">
      <form className="w-full max-w-4xl p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Add Your Product</h1>

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              type="text"
              id="productName"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              type="text"
              id="price"
              placeholder="Enter Product Price"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            type="text"
            id="category"
            placeholder="Enter Product Category"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            id="description"
            placeholder="Enter Product Description"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="productImage">
            Product Image
          </label>
          <input
            className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            type="file"
            id="productImage"
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-pink-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
