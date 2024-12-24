import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function GiveMark() {
  const { id } = useParams();
  console.log("give mark id", id);
  const [oldData, setOldData] = useState([]);

  console.log("this is form givemark ", oldData);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data } = await axios.get(
      `${import.meta.env.VITE_API}/getSignleGive/${id}`
    );
    console.log(data , 'hi ashim')
    setOldData(data);
  };

  const handleGiveMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const giveMarks = form.giveMarks.value;
    const feedback = form.feedback.value;
    const allFeedBack = {
      giveMarks,
      feedback,
      googleDocs:oldData.googleDocs,
      deadline : oldData.deadline,
      description : oldData.description,
      imageUrl : oldData.imageUrl,
      marks : oldData.marks,
      selectValue : oldData.selectValue,
      title : oldData.title,
      userEmail : oldData.userEmail,
      userName : oldData.userName,
    };


    console.log(allFeedBack);
    axios
      .put(`${import.meta.env.VITE_API}/updateFeedback/${id}`, allFeedBack)
      .then((result) => {
        console.log(result.data);
        if (result.data.insertedId) {
          Swal.fire({
            title: "Feedback Giving Successfull ",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log("error from take assignment post api -> ", error);
      });
  };


  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-96 border-2 shadow-lg my-16 p-5">
        <a href={oldData?.googleDocs}  target="_blank" className="underline">
          Open to see Docs link
        </a>
        <form onSubmit={handleGiveMark}>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Give Mark's</span>
            </div>
            <input
              type="number"
              name="giveMarks"
              placeholder="Give Marks"
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
  );
}

export default GiveMark;
