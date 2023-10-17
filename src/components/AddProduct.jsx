import React from "react";

const AddProduct = () => {
  return (
    <div className="text-center my-8">
      <h3 className="font-young font-semibold lg:text-3xl text-xl">Add New Product</h3>
      <form
        className="bg-[#F4F3F0] p-4 sm:p-8 rounded shadow-lg w-full sm:max-w-md  mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="w-full sm:w-1/2 px-2">
            <label
              htmlFor="brand"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Brand Name
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter brand name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="technology">Phone</option>
            <option value="electronics">Computer</option> 
            <option value="gadgets">HeadPhone</option>
            <option value="smart-home">Smart Watch</option>
            <option value="wearables">Camera</option>
            <option value="accessories">Google Devices</option>    
          </select>
        </div>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label
              htmlFor="price"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter price"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="w-full sm:w-1/2 px-2">
            <label
              htmlFor="rating"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Enter rating"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Short Description
          </label>
          <input
            type="description"
            id="description"
            name="description"
            placeholder="Enter description"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-[#D2B48C] py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline-green"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
