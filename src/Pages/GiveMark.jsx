import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Authentication/Loading";
import useCustomAxiosSecure from "../Components/CustomHook/CustomAxios";
import { AuthContext } from "../Context/AuthProvider";

function GiveMark() {
   const [loadingSpinner, setLoadingSpinner] = useState(true)
  const customAxiosSecure = useCustomAxiosSecure();
  const { id } = useParams();

  const { user } = useContext(AuthContext);
  const [oldData, setOldData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await customAxiosSecure.get(`/getSignleGive/${id}`);
    setLoadingSpinner(false)
    setOldData(data);
  };

  const handleGiveMark = (e) => {
    e.preventDefault();
    if (user.email === oldData.submitedBy) {
      return errorTost();
    }

    const form = e.target;
    const giveMarks = form.giveMarks.value;
    const feedback = form.feedback.value;
    const allFeedBack = {
      giveMarks,
      feedback,
      googleDocs: oldData.googleDocs,
      deadline: oldData.deadline,
      description: oldData.description,
      imageUrl: oldData.imageUrl,
      marks: oldData.marks,
      selectValue: oldData.selectValue,
      title: oldData.title,
      userEmail: oldData.userEmail,
      userName: oldData.userName,
    };

 
    axios
      .put(`${import.meta.env.VITE_API}/updateFeedback/${id}`, allFeedBack)
      .then((result) => {
 
        if (result.data.modifiedCount > 0) {
          successTost();
        }
      })
      .catch((error) => {
        console.log("error from take assignment post api -> ", error);
      });
  };

  const errorTost = () => {
    Swal.fire({
      title: "Owner Can't Give Feedback & Mark'",
      text: "Please Try Another One",
      icon: "error",
    });
  };
  const successTost = () => {
    Swal.fire({
      title: "Mark's & Feedback Giving Successfull",
      text: "Thank You Sir ! ",
      icon: "success",
    });
  };

  return (
    <Fade fraction={0.5}>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full md:w-96 lg:w-[500px] border-2 shadow-lg my-16 p-5 rounded-2xl">
          <div>
         {
          loadingSpinner ? <Loading/> :  <section> 
            <a
          href={oldData?.googleDocs}
          target="_blank"
          className="underline font-semibold text-orange-500 text-md"
        >
          Open to see Docs link
        </a>
        <h1 className="text-xm font-semibold font-cardFont text-gray-500  text-wrap my-2">Note : {oldData?.quickNote}</h1>
          </section>
         }
          </div>
          <form onSubmit={handleGiveMark} className="w-full ">
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Give Mark's</span>
              </div>
              <input
                type="number"
                name="giveMarks"
                placeholder="Give Marks"
                required
                className="input input-bordered w-full  "
              />
            </label>
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text">Feedback</span>
              </div>
              <textarea
                type="text"
                name="feedback"
                placeholder="Write Your Feedback Here "
                required
                className="input input-bordered w-full  "
              />
            </label>
            <input
              type="submit"
              value="Submit "
              className="btn bg-orange-600 text-white/90 font-bold font-cardFont w-full mt-5"
            />
          </form>
        </div>
      </div>
    </Fade>
  );
}

export default GiveMark;
