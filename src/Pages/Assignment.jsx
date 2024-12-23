import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import AssignCard from './AssignCard';



function Assignment() {
const [assignments , setAssignments] = useState([])


// fetch data form server (All Assignments)
  useEffect(()=> {
   fetchAllAssignments()
  } , [])

  const fetchAllAssignments = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/assignments`)
    setAssignments(data)
    console.log(data)
  }

  const handleDelete = (_id) => {
    console.log("clicked id -> ", _id);

    // chacking user valid or not
    

    //  delete api for server
    axios
      .delete(`${import.meta.env.VITE_API}/assignments/${_id}`)
      .then((result) => {
        console.log(result.data);
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
    <div className='p-10 bg-cyan-50/50'>
      <h1 className='my-10 text-3xl font-bold text-center'>Total Assignment's - {assignments.length}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 '>
      {
        assignments?.map(card => <AssignCard key={card?._id} card={card} handleDelete={handleDelete}/>)
      }
    </div>
    </div>
  )
}

export default Assignment
