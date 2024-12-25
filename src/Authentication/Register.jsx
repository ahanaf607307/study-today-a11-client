import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import lottieLogin from '../assets/login.json';
import { AuthContext } from '../Context/AuthProvider';

function Register() {

    const {registerNewUser , user , setUser , updateUserProfile , setErrorInvalid,errorInvalid} = useContext(AuthContext)
   
    const navigate = useNavigate()
    const handleRegisterUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value
        const userDetails = {name , photoUrl , email , password}
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(password.length < 6){
          setErrorInvalid('Password at least 6 carecter')
          return
     }
    
     if(!validPassword.test(password)) {
         setErrorInvalid('Password at least one Upparcase Letter , one LowerCase Letter ')
         return;
     }

        setErrorInvalid('')
        registerNewUser(email , password)
        .then(res => {
            const updateUserData = {displayName:name , photoURL:photoUrl}
            updateUserProfile(updateUserData)
            .then(res => {
                setUser({
                  ...res.user,
                  ...updateUserData
                })
            })
            .catch(error => {
              setErrorInvalid(error.message)
            })
            Swal.fire({
              title: "Register Successfully",
              text: "Click Ok to Continue",
              icon: "success"
            });
            
            navigate('/')
           
        })
        .catch(error => {
          setErrorInvalid(error.message)
        })
    }

    
  return (
    <div className="grid lg:grid-cols-2 justify-center items-center  bg-registerBg bg-cover bg-center lg:px-1 xl:px-64 font-cardFont">
      <div>
        <Lottie animationData={lottieLogin}/>
      </div>
      <div className="border-2 rounded-xl shadow-2xl md:w-[500px] lg:my-24 mx-auto p-4 m-2 md:p-10 backdrop-blur-3xl">
    
     <h1 className="text-center font-semibold  text-white/90 text-3xl">Register Now</h1>
    <form onSubmit={handleRegisterUser} className="font-semibold text-gray-600">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-white/90">Name</span>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full "
          required
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-white/90">Photo Url</span>
        </div>
        <input
          type="url"
          name="photoUrl"
          placeholder="Photo Url"
          className="input input-bordered w-full "
          required
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-white/90">Email</span>
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
          <span className="label-text text-white/90">Password</span>
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
        value="Register"
        className="btn w-full bg-blue-500 my-5 text-white font-semibold"
      />
    </form>
    <h1 className='my-2 text-red-600 mx-auto text-lg'>{errorInvalid} </h1>
    <h1 className="my-10 font-semibold text-xl">
      Already Have an account  ?{" "}
      <Link className="text-red-600 underline" to="/login">
        Login
      </Link>{" "}
    </h1>
  </div>
    </div>
  )
}

export default Register
