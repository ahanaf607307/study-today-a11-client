import { format } from "date-fns";
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import useCustomAxiosSecure from '../Components/CustomHook/CustomAxios';
import Loading from "../Authentication/Loading";
import { AuthContext } from "../Context/AuthProvider";

function AssignmentDetails() {
  const [loadingSpinner, setLoadingSpinner] = useState(true)
    const [assignmentData , setAssignmentData] = useState([])
    const {user} = useContext(AuthContext)
      const customAxiosSecure = useCustomAxiosSecure()
    const {_id,userEmail,userName,title,description,marks,imageUrl,selectValue,deadline} = assignmentData
    const navigate = useNavigate(); 
    const {id} = useParams()
    useEffect(() => {
        fetchDetailsData()
    } , [])

const fetchDetailsData = async() => {
    const { data } = await customAxiosSecure.get(`/update/${id}`);
    setLoadingSpinner(false)
 setAssignmentData(data)
}


// take assignment 

const handleTakeAssignment = () => {

if(user.email === userEmail)  {
 return Swal.fire({
    title: "Assignment Creator Can't Take Assignment",
    text: "Can't Take this Assignment",
    icon: "error",
  });
}


  if (deadline && new Date(deadline) < new Date()) {
      Swal.fire({
                title: "Deadline is Over ! ",
                text: "Can't Take this Assignment",
                icon: "error",
              });
  } else {
    navigate(`/takeAssignment/${_id}`) ;
  }
};

  
  return (
    <div className='w-full md:w-[600px] lg:w-[900px] mx-auto '>
      <h1 className='text-4xl text-orange-600 text-center font-bold font-cardFont my-7'>Assignment's Details</h1>
{
  loadingSpinner ? <Loading/> : <div className='border shadow-xl rounded-2xl my-10 p-5'>
  <div className='w-full  md:h-[400px] lg:h-[600px]'>
  <img src={imageUrl} alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='my-5'>
      <h1 className='text-2xl font-semibold my-2'>{title}</h1>
      <h1 className='text-md font-semibold text-gray-500 my-2'>{description}</h1>
     <section className='grid grid-cols-3 gap-1 md:gap-x-10 lg:gap-x-16 items-center my-3'>
     <h1 className='text-[12px] font-medium border-2 border-orange-300 px-2 py-1 rounded-md text-black/60  md:text-md'>Total Mark's : {marks}</h1>
     <h1 className='text-[12px] font-medium border-2 border-orange-300 px-2 py-1 rounded-md text-black/60  md:text-md'>Difficulty : {selectValue}</h1>
     <h1 className='text-[12px] font-medium border-2 border-orange-300 px-2 py-1 rounded-md text-black/60  md:text-md'> 
     Deadline: {deadline ? format(new Date(deadline), "P") : "No deadline"}
      </h1>
     </section>
    
     <button onClick={handleTakeAssignment} className='btn bg-orange-600 text-white/90 w-full mt-5'>Take assignment</button>
      
  </div>
</div>
}
    </div>
  )
}

export default AssignmentDetails
