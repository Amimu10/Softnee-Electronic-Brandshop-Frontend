// import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
// import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { signInUser, signinWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLoginError("");
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setLoginError("Invalid email or password. Please try again.");
        } else {
          setLoginError("An error occurred. Please try again later.");
        }
      });
  };

  const handleGoogleSign = () => {
    signinWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div data-aos="zoom-in-down">
    <div className="flex items-center justify-center bg-gray-100 my-8">
    <button onClick={handleGoogleSign} className="flex items-center border rounded-md font-young border-[#FDBF05] bg-white px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
      <title>Google-color</title>
      <desc>Created with Sketch.</desc> 
      <defs></defs>
      <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Color-" transform="translate(-401.000000, -860.000000)">
              <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                  <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                  <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path>
                  <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path>
              </g>
          </g>
      </g>
  </svg>
  <span>Continue with Google</span>
</button>
</div>
<p className="text-center text-2xl text-[#A3A3A3] font-semibold font-young mt-2">Or</p>
    <div className="hero mb-24 bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold text-[#1A1919]">Login now!</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ABCE4E]">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border-[#FDBF05] border-1 focus-border-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input border-[#FDBF05]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {loginError && (
              <p className="text-red-500 mt-2">{loginError}</p>
            )}
            <div className="form-control mt-6">
              <button className="bg-[#FDBF05] font-thin font-young text-white p-2 rounded-md">
                Login
              </button>
            </div>
            <p className="flex gap-5">
              Dont have an account?
              <Link className=" text-orange-600 font-semibold" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
