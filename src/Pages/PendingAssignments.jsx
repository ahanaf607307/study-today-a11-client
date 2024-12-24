import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
function PendingAssignments() {
  const { user } = useContext(AuthContext);

  const [myAttempted, setMyAttemped] = useState([]);

  console.log(myAttempted);
  useEffect(() => {
    fetchAttemptedData();
    const pendingData = myAttempted.filter(item => item.status='pending')
    console.log(pendingData)
    setMyAttemped(pendingData)
  }, []);

  const fetchAttemptedData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/allAssignment`
    );
    setMyAttemped(data);
  };
  return (
    <div className="w-full ">
      <div className='mt-6 mb-14  h-64 w-full bg-no-repeat bg-center  bg-cover bg-pendingBg bg-blend-darken rounded-2xl'>
    <div className=' bg-black/60 w-full h-full flex flex-col justify-center items-center rounded-2xl'>
    <h1 className='text-5xl text-center font-bold text-orange-500'>  PENDING ASSIGNMENT
    </h1>
    <h1 className='text-xl text-center font-bold text-white/80 mt-5'> We will give you many benefits when using online learning
    </h1>
    </div>
     </div>
     <div className="w-full my-14">

<h1 className="text-3xl my-10 text-orange-600 font-cardFont font-bold text-center">
  {myAttempted?.length} Attempted By - {user?.displayName}{" "}
</h1>
<section>
  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Assignment Marks</th>
          <th>Examinee Name</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        {myAttempted.map((attempt, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{attempt?.title ?? "N/A"}</td>
            <td>{attempt?.marks ?? "N/A"}</td>
            <td>{attempt?.submiterName ?? "N/A"}</td>
            <td><Link to={`/giveMark/${attempt?._id}`} className="btn bg-orange-600 font-bold font-cardFont text-white/90">Give Mark</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
</div>
    </div>
  )
}

export default PendingAssignments
