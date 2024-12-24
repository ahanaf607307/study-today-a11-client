import React, { useContext } from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

function Login() {
  const { loginUser, setUser ,setLoading, googleLoginUser , errorInvalid, setErrorInvalid } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  // form submit
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorInvalid('');
    if (password.length < 6) {
      setErrorInvalid("Password at least 6 carecter");
      return;
    }


    loginUser(email, password)
      .then((res) => {
        const user = res.user
        setUser(user);
        setLoading(true)
        Swal.fire({
          title: "Login Successfully",
          text: "Click Ok to Continue",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Invalid Email or Password",
          text: "Please Check Your Email And Password",
          icon: "error",
        });
        setErrorInvalid(error.message);
      });
  };

//   google login 

const handleGoogleLogin = () => {
    googleLoginUser()
    .then((result) => {
      setUser(result.user);
      setLoading(true)
      Swal.fire({
        title: "Login Successfully",
        text: "Click Ok to Continue",
        icon: "success",
      });
      navigate(location?.state ? location.state : "/");
     
    })
    .catch((error) => {
      setErrorInvalid(error.message);
      faildLoginAlert();
    });
}



const faildLoginAlert = () => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Please Check Your Email And Password",
    showConfirmButton: false,
    timer: 1500,
  });
};

  return (
    <div className="border-2 rounded-xl shadow-2xl md:w-[500px] my-10 md:my-32 mx-auto p-4 m-2 md:p-10 bg-[#A59D84]">
      <h1 className="text-center font-semibold my-5 text-3xl">
        <span className="text-white">Login Now</span>
      </h1>
      <form onSubmit={handleLogin} className="font-semibold text-gray-600">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-white">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-white">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full "
            required
          />
        </label>
        <input
          type="submit"
          value="Login"
          className="btn text-white w-full bg-[#c4a174] mt-8"
        />
      </form>
      <h1 className="my-3 text-red-600 mx-auto text-lg">{errorInvalid} </h1>
      <button onClick={handleGoogleLogin} className="btn mt-5  bg-[#c4a174]">
        <IoLogoGoogleplus className="text-[#f5da3f] text-xl" /> Login With
        Google
      </button>
      <h1 className="my-10">
        New User ?{" "}
        <Link className="text-red-600 underline" to="/register">
          Register
        </Link>{" "}
      </h1>
    </div>
  );
}

export default Login;
