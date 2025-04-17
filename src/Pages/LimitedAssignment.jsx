import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import useCustomAxiosSecure from '../Components/CustomHook/CustomAxios';
import axios from 'axios';
import AssignCardLimited from './AssignCardLimited';

const LimitedAssignment = () => {

    const [assignments , setAssignments] = useState([])
      const { user } = useContext(AuthContext);
    const customAxiosSecure = useCustomAxiosSecure()
    const [loadingSpinner, setLoadingSpinner] = useState(true)
    
    // fetch data form server (All Assignments)
      useEffect(()=> {
       fetchAllAssignments()
      } , [])
    
      const fetchAllAssignments = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API}/assignments/limit`)
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
        <div className="px-4 md:px-10 lg:px-20 py-16 bg-white text-gray-900 font-cardFont">

  <div className="text-center mb-14 max-w-3xl mx-auto">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600">
      Popular Assignments
    </h1>
    <p className="text-base md:text-lg text-gray-600 mt-4">
      Discover the most attempted and appreciated assignments by students across various categories. Join the academic momentum!
    </p>
  </div>

  {/* Assignment Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 max-w-7xl mx-auto">
    {
      assignments?.map(card => (
        <AssignCardLimited
          key={card?._id}
          card={card}
          handleDelete={handleDelete}
        />
      ))
    }
  </div>



  {/*  Why Popular Assignments Matter */}
  <div className="mt-20 bg-gray-100 p-8 rounded-xl shadow-sm max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Are These Assignments Popular?</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
      <li>They cover real-world, practical knowledge.</li>
      <li>They are frequently attempted by a wide variety of learners.</li>
      <li>They contain structured instructions and clear goals.</li>
      <li>They are reviewed and refined based on community feedback.</li>
    </ul>
  </div>

    {/*  How It Works */}
    <div className="mt-16 max-w-6xl mx-auto">
    <p className="text-gray-700 mb-6">
      Students can explore, attempt, and submit these popular assignments. Educators can view how many students attempted their task and get valuable insights for future improvements.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
        <h3 className="text-lg font-semibold text-orange-600 mb-2">Browse Assignments</h3>
        <p className="text-sm text-gray-700">Explore from a wide list of student-favorite assignments. Filter by difficulty or subject.</p>
      </div>
      <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
        <h3 className="text-lg font-semibold text-orange-600 mb-2">Attempt & Submit</h3>
        <p className="text-sm text-gray-700">Students can directly attempt and submit assignments with clarity and guidance.</p>
      </div>
      <div className="p-5 border rounded-xl shadow-sm bg-gray-50">
        <h3 className="text-lg font-semibold text-orange-600 mb-2">Track Performance</h3>
        <p className="text-sm text-gray-700">Teachers or peers can view submissions, give marks, and track student progress.</p>
      </div>
    </div>
  </div>
</div>

    );
};

export default LimitedAssignment;