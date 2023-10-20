import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home';
import MainLayOut from './MainLayOut';
import ErrorPage from './components/ErrorPage';
import AddProduct from './components/AddProduct';
import MyCart from './components/MyCart';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute'; 
import AdvertisementSlider from './components/AdvertisementSlider'; 
import ProductDetails from './components/ProductDetails';
import BrandPage from './components/BrandPage';
import UPdateProducts from './components/UPdateProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/products",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>        
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>      
      },
      {
        path: "/advertiements",
        element: <AdvertisementSlider></AdvertisementSlider>        
      },
      {
        path: "/showBrand/:brand", 
        element: <BrandPage></BrandPage>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/products/${params.brand}`);
        },
      },
     
      {
        path: "/showBrand/brandDetails/:id",   
        element: <ProductDetails></ProductDetails>,
        loader: ({params})=>{
          return fetch(`http://localhost:5000/productDetails/${params.id}`)
        }
      },
      {
        path: "updateProducts/:id",   
        element: <UPdateProducts></UPdateProducts>,
        loader: ({params})=>{
          return fetch(`http://localhost:5000/updateproducts/${params.id}`)
        }
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />  
   </AuthProvider>
  </React.StrictMode>
);