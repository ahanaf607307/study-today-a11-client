import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Swal from "sweetalert2";
import Loading from '../Authentication/Loading';
import useCustomAxiosSecure from '../Components/CustomHook/CustomAxios';
import AssignCard from './AssignCard';
import  { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';


function Assignment() {
const [assignments , setAssignments] = useState([])
  const { user } = useContext(AuthContext);
const customAxiosSecure = useCustomAxiosSecure()
const [loadingSpinner, setLoadingSpinner] = useState(true)

// fetch data form server (All Assignments)
  useEffect(()=> {
   fetchAllAssignments()
  } , [])

  const fetchAllAssignments = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/assignments`)
    setLoadingSpinner(false)
    setAssignments(data)

  }

  const handleDelete = (_id) => {

    //  delete api for server
    customAxiosSecure
      .delete(`/assignments/${_id}`)
      .then((result) => {
  
        if (result.data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const remainingAssignments = assignments.filter(
            (assign) => assign._id !== _id
          );
          setAssignments(remainingAssignments);
        }
      })
      .catch((err) => {
        console.log("error found from Delete Api", err);
      });
  };


  return (
    <Fade>
      <div className='pt-14'>
      <div className="mt-6 mb-14 h-[300px] md:h-[500px] w-full bg-no-repeat bg-center bg-cover bg-assignmentBg bg-blend-overlay relative">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10"></div>
  
  <div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-4 text-center">
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide leading-tight drop-shadow-md">
      Empower Your Mind, <br className="hidden md:block" /> Connect Across Continents
    </h1>
    <p className="mt-5 text-base md:text-xl text-white/90 max-w-3xl leading-relaxed">
      Study smart, share knowledge, and grow together in the most vibrant student community on the planet.
    </p>
    <div className="mt-8">
      <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#fda400] hover:text-white transition duration-300">
        Join Now
      </button>
    </div>
  </div>
</div>


  <div className='my-10  '>
  <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-500'> POPULAR ASSIGNMENT'S
   </h1>
   <h1 className='text-md text-center font-bold text-black/60 mt-5'> We have monthly 1000+ request to be joined assignment's exm.
   </h1>
  </div>


    
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 mb-10 max-w-7xl mx-auto'>
        {
          assignments?.map(card => <AssignCard key={card?._id} card={card} handleDelete={handleDelete}/>)
        }
      </div>
     
    </div>
    </Fade>
  )
}

export default Assignment
