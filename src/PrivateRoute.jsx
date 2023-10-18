
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return<div className="h-[80vh] text-center">
        <span className="  loading loading-spinner loading-lg text-orange-700"></span>
    </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate> 
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
  };