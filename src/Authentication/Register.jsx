import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

function Register() {

    const {registerNewUser , setUser , updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegisterUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        const email = e.target.email.value
        const passowrd = e.target.password.value
        const userDetails = {name , photoUrl , email , passowrd}
        console.log(userDetails)
        registerNewUser(email , passowrd)
        .then(res => {
            const updateUserData = {displayName:name , photoURL:photoUrl}
            updateUserProfile(updateUserData)
            .then(res => {
                setUser({
                    ...res.user
                })
            })
            .catch(error => {
                console.log('error from update profile -->' , error)
            })

            setUser({
                ...res.user
            })
            
            navigate('/')
        })
        .catch(error => {
            console.log(error.message)
        })
    }
  return (
    <div className="border-2 rounded-xl shadow-2xl md:w-[500px] my-10 md:my-32 mx-auto p-4 m-2 md:p-10">
    
     <h1 className="text-center font-semibold my-5 text-3xl">Register Now</h1>
    <form onSubmit={handleRegisterUser} className="font-semibold text-gray-600">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Name</span>
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
          <span className="label-text">Photo Url</span>
        </div>
        <input
          type="text"
          name="photoUrl"
          placeholder="Photo Url"
          className="input input-bordered w-full "
          required
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Email</span>
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
          <span className="label-text">Password</span>
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
    {/* <h1 className='my-2 text-red-600 mx-auto text-lg'>{errorInvalid} </h1> */}
    <h1 className="my-10">
      Already Have an account  ?{" "}
      <Link className="text-red-600 underline" to="/login">
        Login
      </Link>{" "}
    </h1>
  </div>
  )
}

export default Register
