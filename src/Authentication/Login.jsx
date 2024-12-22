import React, { useContext } from "react";
import { IoLogoGoogleplus } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Login() {
  const { loginUser, setUser , googleLoginUser } = useContext(AuthContext);
  const navigate = useNavigate()
  

  // form submit
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user
        console.log('login user done -> ',user)
        setUser(res.user);
          navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

//   google login 

const handleGoogleLogin = () => {
    googleLoginUser()
    .then((result) => {
      setUser(result.user);
      navigate('/')
      console.log('google logged in user is --> ',result.user)
     
    })
    .catch((error) => {

    console.log(error.message);
     
    });
}
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
      <h1 className="my-3 text-red-600 mx-auto text-lg">
        error message set here
      </h1>
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
