import { Link} from "react-router-dom";

const ProductCard = ({ product}) => {
  const { _id, brand, brand_image } = product;
  // const { id } = useParams();
  // const brandProducts = product.filter(item => item.brand === id);

  return (
    <Link to={`/products/${brand}`}>
      <div  className="card image-full">
        <figure>
          <img className="" src={brand_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-center text-[#eee] mt-36 text-2xl font-young font-semibold">{brand}</p>
        </div> 
      </div> 
    </Link> 
    

  );
};

export default ProductCard;
