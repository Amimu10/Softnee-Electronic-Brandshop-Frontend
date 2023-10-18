import { Link } from "react-router-dom";

const BrandProducts = ({item}) => {

    const { _id, image, name, brand, category, price, rating } = item;
    return (
        <div className="card  w-full card-side bg-base-100 shadow-xl flex items-center justify-between p-10 gap-8">
        <figure>
          <img className="h-64" src={image} alt="product" /> 
        </figure>
        <div>
          <h2 className="card-title"> Name: {name}</h2>   
          <p> brand: {brand}</p> 
          <p> category: {category}</p>
          <p> price: {price}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-4">
        <button
           
           className="p-2 bg-[#EA4744] text-white rounded"
         >
           See Details
         </button> 

          <button className="p-2 bg-[#D2B48C] text-white rounded">View</button>
          <Link to={`updateProducts/${_id}`}>  
            <button className="p-2 bg-[#3C393B] text-white rounded">Edit</button>
          </Link>
         
        </div>
      </div>
    );
};

export default BrandProducts; 