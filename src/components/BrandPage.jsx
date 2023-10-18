
import { useLoaderData, useParams } from "react-router-dom";

import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import BrandProducts from "./BrandProducts";

AOS.init(); 

const BrandPage = () => {
const brands = useLoaderData();
const { brand } = useParams();
const filteredData = brands.filter((product) => product.brand === brand);

  return (
    <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          filteredData.map(item => <BrandProducts key={item.brand} item={item}></BrandProducts>)
        }
      </div>
    </div>
  );
};

export default BrandPage;
