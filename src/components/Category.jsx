// import { useEffect, useState } from "react";
// import { useLoaderData, useParams} from "react-router-dom";
// import ProductCard from "./ProductCard";
// import 'aos/dist/aos.css'; 
// import AOS from 'aos';

// AOS.init();

// const Category = () => {
//   const products = useLoaderData();
//   const { id } = useParams();
  
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const brandsMap = new Map();

//     const newData = products.reduce((accumulator, current) => {
//       if (!brandsMap.has(current.brand)) {
//         brandsMap.set(current.brand, true); 
//         accumulator.push(current);
//       }
//       return accumulator;
//     }, []);

//     setFilteredData(newData);
//   }, [products]);

//   return (
//     <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
//       <div className="text-center ">
//         <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold font-young text-[#1A1919] text-center mt-14">Browse Through Our Categories Here.</h3>
//         <p className="text-lg text-[#555] text-center font-medium font-young mt-2 mb-8"> Explore a wide range of products in our collection. Click on a brand to view more products from that brand.</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {filteredData.map((product) => (
//           <ProductCard key={product._id} product={product}></ProductCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Assuming brand.json is in the public folder
    fetch('/brand.json')
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-10 md:my-20 relative z-0"> 
    <h2 className="text-3xl text-center font-extrabold mb-6">Choose Brands</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pap-5">
      {brands.map((brand) => (
        <Link key={brand.id} to={`/showBrand/${brand.name}`}>
          <div className="card xl:w-96 w-3/4 mx-auto shadow-2xl border cursor-pointer">
            <figure className="overflow-hidden">
              <img className="h-[200px] object-cover w-full" src={brand.image} alt="" />
            </figure>
            <div className="card-body p-4">
              <h3 className="text-3xl font-medium text-center">{brand.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
}

export default Category;
