import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import AssignCard from './AssignCard';
import assignmentBg from '../assets/assignmentBg.png'
import { Fade } from 'react-awesome-reveal';


function Assignment() {
const [assignments , setAssignments] = useState([])


// fetch data form server (All Assignments)
  useEffect(()=> {
   fetchAllAssignments()
  } , [])

  const fetchAllAssignments = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/assignments`)
    setAssignments(data)

  }

  const handleDelete = (_id) => {

    //  delete api for server
    axios
      .delete(`${import.meta.env.VITE_API}/assignments/${_id}`)
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
      <div className='p-10 '>
      <div className='mt-6 mb-14  h-[500px] w-full bg-no-repeat bg-center  bg-cover bg-assignmentBg bg-blend-darken rounded-2xl'>
   <div className=' bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl'>
   <h1 className='text-5xl text-center font-bold text-lime-400 w-9/12'> Meet, chat, and study with students from all over the world
   </h1>
   <h1 className='text-xl text-center font-bold text-white/80 mt-5 w-8/12'> Join the largest global student community online and say goodbye to lack of motivation.
   </h1>
   </div>
     
    </div>

  <div className='my-10'>
  <h1 className='text-5xl text-center font-bold text-orange-500'> POPULAR ASSIGNMENT'S
   </h1>
   <h1 className='text-md text-center font-bold text-black/60 mt-5'> We have monthly 1000+ request to be joined assignment's exm.
   </h1>
  </div>


    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 mb-10'>
      {
        assignments?.map(card => <AssignCard key={card?._id} card={card} handleDelete={handleDelete}/>)
      }
    </div>
    </div>
    </Fade>
  )
}

export default Assignment
