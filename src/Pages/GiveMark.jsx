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
  <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
    <div className="w-full max-w-lg border border-gray-200 rounded-2xl shadow-xl p-8 bg-white">

      {/* Docs Link and Note */}
      <div className="mb-6">
        {
          loadingSpinner ? (
            <Loading />
          ) : (
            <section>
              <a
                href={oldData?.googleDocs}
                target="_blank"
                rel="noreferrer"
                className="underline font-semibold text-orange-600 hover:text-orange-800 text-md"
              >
                Open to see Docs link
              </a>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                <span className="font-semibold">Note:</span> {oldData?.quickNote}
              </p>
            </section>
          )
        }
      </div>

      {/* Form */}
      <form onSubmit={handleGiveMark} className="space-y-5">
        {/* Marks Input */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Give Mark's</label>
          <input
            type="number"
            name="giveMarks"
            placeholder="Enter marks"
            required
            className="input input-bordered w-full focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Feedback Textarea */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Feedback</label>
          <textarea
            name="feedback"
            placeholder="Write your feedback here..."
            required
            className="textarea textarea-bordered w-full h-28 resize-none focus:border-orange-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Submit"
          className="btn w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold tracking-wide"
        />
      </form>
    </div>
  </div>
</Fade>

  );
}

export default GiveMark;
