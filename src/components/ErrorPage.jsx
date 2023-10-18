import { Link } from 'react-router-dom';
import Error_Image from "../assets/error.png";

const ErrorPage = () => {
    const errorMessage = 'An unexpected error occurred.';
    
    return (
        <div className="flex flex-col text-cente my-12 items-center">
             <Link to="/" className="text-blue-500  hover:text-blue-700">
                Go back to home
            </Link>
            <img src={Error_Image} className="w-[350px] mx-auto" alt="" />
            <p className="text-lg text-gray-700 my-4">{errorMessage}</p>
           
        </div>
    );
};

export default ErrorPage;