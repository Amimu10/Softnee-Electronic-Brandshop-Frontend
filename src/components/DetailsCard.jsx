
const DetailsCard = ({product}) => {
    const {image} = product;
    return (
        <div>
            <img src={image} alt="" /> 
        </div>
    );
};

export default DetailsCard;