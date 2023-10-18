const ProductCard = ({ product }) => {
  const { brand, brand_image } = product;

  return (
    <div className="max-w-[1340px] lg:px-8 px-6">
      <div className="card image-full">
        <figure>
          <img className="" src={brand_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-center text-[#eee] mt-36 text-2xl font-young font-semibold">{brand}</p>
        </div> 
      </div> 
    </div>
  );
};

export default ProductCard;
