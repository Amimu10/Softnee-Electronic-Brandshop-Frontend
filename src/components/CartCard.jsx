// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const CartCard = ({ detailsData }) => {
    const { image,
        name,
        brand,
        price,
        category,
        rating,
        description, } = detailsData;


  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-4">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={image}
              alt="image"
              className="h-[250px] w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {name}
            </h4>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {description}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {brand}
            </p>
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              $ {price}
            </h6>
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              Rating: {rating}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
