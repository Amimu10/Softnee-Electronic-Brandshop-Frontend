
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

AOS.init();

function Category() {
  const [brands, setBrands] = useState([]);

  useEffect(()  => {  
    fetch('/brand.json')   
      .then((res) => res.json())  
      .then((data) => setBrands(data));    
  }, []);

  return (
    <div data-aos="fade-down-right" className="my-10 md:my-20 relative z-0 max-w-[1340px] lg:px-8 px-4 mx-auto"> 
    <h2 className="lg:text-3xl text-2xl text-center font-young font-semibold mb-6">Choose Brands</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {brands.map((brand) => (
        <Link key={brand.id} to={`/showBrand/${brand.name}`}>
          <div className="card mx-auto shadow-md border cursor-pointer">
            <figure className="overflow-hidden">
              <img className="h-[200px] object-cover w-full" src={brand.image} alt="" />
            </figure>
            <div className="p-2">
              <h3 className="text-xl font-medium font-young text-center">{brand.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
}

export default Category;
