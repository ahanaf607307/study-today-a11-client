import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Loading from "../Authentication/Loading";
import useCustomAxiosSecure from "../Components/CustomHook/CustomAxios";
import { AuthContext } from "../Context/AuthProvider";
function PendingAssignments() {
  const { user , setLoading } = useContext(AuthContext);
  const customAxiosSecure = useCustomAxiosSecure()
  const [myAttempted, setMyAttemped] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(true)

  useEffect(() => {
    fetchAttemptedData();
    const pendingData = myAttempted.filter(item => item.status='pending')

    setMyAttemped(pendingData)
  }, []);

  const fetchAttemptedData = async () => {
    const { data } = await customAxiosSecure.get(
      `/allAssignment`
    );
    setLoadingSpinner(false)
    setMyAttemped(data);
    setLoading(false)
  };
  return (
    <Fade>
      <div className="w-full ">
      <div className='mt-6 mb-14 h-[260px]  md:h-[400px] w-full bg-no-repeat bg-center  bg-cover bg-pendingBg bg-blend-darken rounded-2xl'>
    <div className=' bg-black/50 w-full h-full flex flex-col justify-center items-center rounded-2xl'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold text-lime-400'>  PENDING ASSIGNMENT
    </h1>
    <h1 className='text-md md:text-xl text-center font-bold text-white/80 mt-5'> Forget the outside world 🧠
    </h1>
    </div>
     </div>
     <div className="w-full my-14">

<h1 className="text-3xl my-10 text-orange-600 font-cardFont font-bold text-center">
   Total Pending -  {myAttempted?.length}
</h1>
{
  loadingSpinner ? <Loading/> : <section>
  <div className="overflow-x-auto">
    <table className="table">
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
}
</div>
    </div>
    </Fade>
  )
}

export default PendingAssignments
