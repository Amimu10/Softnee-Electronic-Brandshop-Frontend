

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [brands, setBrands] = useState([]);

  useEffect(()  => {  
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
