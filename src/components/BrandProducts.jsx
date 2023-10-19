// import { Link } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";

// const BrandProducts = ({item}) => {

//     const { _id, image, name, brand, category, price, rating } = item;
//     return (
//     <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
//     <div className="flex flex-col justify-between p-4 leading-normal">
//       <h2 className="text-xl sm:text-2xl">{name}</h2>
//       <p className="text-sm sm:text-base">Brand: {brand}</p>
//       <p className="text-sm sm:text-base">Category: {category}</p>
//       <p className="text-sm sm:text-base">Price: {price}</p>
//       <p className="text-sm sm:text-base">Rating: {rating}</p>
//       <Link to={`/updateProducts/${_id}`}>
//       <button className="btn btn-secondary my-5">Update</button> 
//       </Link>   
//       <Link to={`/products/${_id}`}>  
//       <button className="btn btn-secondary">Details</button>
//       </Link>
//     </div>
//   </div>
    
//     );
// };

// export default BrandProducts;   
import StarRatings from 'react-star-ratings';
const ShowBrandCard = ({ data }) => {

  const { name, brand, price, rating, type, image, _id } = data;
  const [rat] = useState(parseInt(rating));


  return (
      <div className="w-64 bg-white rounded-lg shadow-lg border mx-auto">
          <img src={image} alt="Product Image" className="w-full h-[250px] rounded-t-lg" />

          <div className="p-4 ">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-gray-500">Band Name: {brand}</p>

              <div className="mt-3">
                  <p className="text-gray-700">Type: {type}</p>
                  <p className="text-gray-700">Price: ${price}</p>
                  <div >
                      <StarRatings
                          starDimension="25px"
                          starSpacing="2px"
                          rating={rat}
                          starRatedColor="gold"
                          numberOfStars={5}
                          name="rating"
                      />
                  </div>
              </div>

              <div className="mt-4 flex justify-between">
                  <Link to={`/showBrand/brandDetails/${_id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                      Details
                  </Link>
                  <Link  to={`/updateProducts/${_id}`} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                     Update
                  </Link>
              </div>
          </div>
      </div>
  );
};

export default ShowBrandCard;