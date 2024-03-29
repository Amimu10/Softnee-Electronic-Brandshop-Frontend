// import { useLoaderData} from "react-router-dom";

// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import BrandProducts from "./BrandProducts";
// import AdvertisementSlider from "./AdvertisementSlider";

// AOS.init();

// const BrandPage = () => {
// const data = useLoaderData();

//   return (
//     <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 mx-auto">
//       <div className="my-8">
//       <AdvertisementSlider details={data}/>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">

//         {
//           data.map(card=> <BrandProducts key={data._id} data={card}></BrandProducts>)
//         }
//       </div>
//     </div>
//   );
// };

// export default BrandPage;

import { useLoaderData } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import BrandProducts from "./BrandProducts";
import AdvertisementSlider from "./AdvertisementSlider";

AOS.init();

const BrandPage = () => {
  const data = useLoaderData();

  return (
    <div data-aos="zoom-in-up" className="max-w-[1340px] lg:px-8 px-4 mx-auto">
      <div className="my-8">
        <AdvertisementSlider details={data} />
      </div>
      <h3 className="text-center text-3xl font-young font-semibold my-12">
        Our Available Products
      </h3>

      { data.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
       {data.map((card) => (
         <BrandProducts key={card._id} data={card}></BrandProducts>
       ))}
     </div> :  <p className="text-center text-2xl text-pink-700 font-young mb-12">No product available on this brand</p>
     }
    </div>
  );
};

export default BrandPage;
