import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import StarRatings from "react-star-ratings"
import Swal from "sweetalert2";

const ProductDetails = () => {
  const handleAddToCart = () => {
    console.log("product upcoming");
    const CartItems = JSON.parse(localStorage.getItem("item")) || [];
    const exist = CartItems.find((item) => item._id === detailsData._id);

    if (!exist) {
      CartItems.push(detailsData);
      localStorage.setItem("item", JSON.stringify(CartItems));
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your product added",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Your product already added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const detailsData = useLoaderData();
  console.log(detailsData);
  const {
    image,
    name,
    brand,
    rating,
    description,
  } = detailsData;

  return (
    <div
      className="flex p-4 flex-col border w-full border-[#f33f3f] mx-auto items-center rounded-md my-8 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="w-full h-full rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl text-pink-500 font-bold tracking-tight  font-young dark:text-white">
          {brand}
        </h5>
        <h5 className="mb-2 text-md text-pink-500 font-semibold tracking-tight  dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-sm font-young dark:text-gray-400">
         {description} 
        </p>
        <p className="text-md text-pink-500 font-semibold">Rating: {rating}</p>
        <div className="my-6 ">
        <button onClick={handleAddToCart} className="bg-[#f33f3f] px-4 py-2 rounded-md text-white font-young font-medium">Add to Cart</button>
       </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
