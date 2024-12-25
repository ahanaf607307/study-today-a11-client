import { format } from "date-fns";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import useCustomAxiosSecure from '../Components/CustomHook/CustomAxios';
import Loading from "../Authentication/Loading";

function AssignmentDetails() {
  const [loadingSpinner, setLoadingSpinner] = useState(true)
    const [assignmentData , setAssignmentData] = useState([])
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
    <div className='w-[600px] mx-auto '>
      <h1 className='text-4xl text-orange-600 text-center font-bold font-cardFont my-7'>Assignment's Details</h1>
{
  loadingSpinner ? <Loading/> : <div className='border shadow-xl rounded-2xl my-10 p-5'>
  <div className='w-full  h-[400px]'>
  <img src={imageUrl} alt="" className='w-full h-full rounded-xl' />
  </div>
  <div className='my-5'>
      <h1 className='text-2xl font-semibold my-2'>{title}</h1>
      <h1 className='text-md font-semibold text-gray-500 my-2'>{description}</h1>
     <section className='flex justify-between items-center my-3'>
     <h1 className='text-sm font-medium border-2 border-orange-300 px-2 py-1 rounded-md text-black/60'>Total Mark's : {marks}</h1>
     <h1 className='text-sm font-medium border-2 border-orange-300 px-2 py-1 rounded-md text-black/60'>Difficulty : {selectValue}</h1>
     <h1 className='text-sm font-medium border-2 border-orange-300 px-2 py-1 rounded-md text-black/60'> 
     Deadline: {deadline ? format(new Date(deadline), "P") : "No deadline"}
      </h1>
     </section>
     {/* <Link to={`/takeAssignment/${_id}`} className='btn bg-orange-600 text-white/90 w-full mt-5'>Take assignmen</Link> */}
     <button onClick={handleTakeAssignment} className='btn bg-orange-600 text-white/90 w-full mt-5'>Take assignment</button>
      
  </div>
</div>
}
    </div>
  )
}

export default AssignmentDetails
