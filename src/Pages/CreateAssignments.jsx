import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

function CreateAssignments() {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    const userEmail = user.email;
    const userName = user.displayName;
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const imageUrl = form.imageUrl.value;
    const selectValue = form.selectValue.value;
    const deadline = startDate;
    const assignmentData = {
      title,
      description,
      marks,
      imageUrl,
      selectValue,
      deadline,
      userEmail,
      userName,
    };

    if (!startDate) {
      setError("Give Valid Date");
      return;
    }
    setError(""); 



    axios
      .post(`${import.meta.env.VITE_API}/assignments`, assignmentData)
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Swal.fire({
          title: "Successfully Create Assignment!",
          text: "Do you want to continue",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log("error from post api by create assignment", error);
      });
  };


 
  return (
    <div className="px-4 mt-20 py-10 bg-white min-h-screen">
    {/* Heading */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-orange-600 font-bold mb-6">
      Create Your Assignment
    </h1>
  
    {/* Extra Info Section */}
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
      <div className="p-5 border rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold text-orange-500">📘 Study Type</h3>
        <p className="text-sm text-gray-600 mt-2">
          Create assignments for group study, self-practice or quiz-based tasks.
        </p>
      </div>
      <div className="p-5 border rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold text-orange-500">📍 Instructions</h3>
        <p className="text-sm text-gray-600 mt-2">
          Provide specific learning goals or rules students should follow.
        </p>
      </div>
      <div className="p-5 border rounded-xl shadow hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold text-orange-500">🔗 Reference</h3>
        <p className="text-sm text-gray-600 mt-2">
          Suggest resources (YouTube/Docs/Books) to help with the assignment.
        </p>
      </div>
    </div>
  
    {/* Assignment Form */}
    <div className="md:w-[500px] lg:w-[800px] w-full mx-auto border border-gray-200 shadow-xl p-8 rounded-2xl bg-white">
      <form onSubmit={handleAssignmentSubmit}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered w-full"
          />
        </label>
  
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full"
          />
        </label>
  
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Mark's</span>
          </div>
          <input
            type="number"
            name="marks"
            placeholder="Mark's"
            className="input input-bordered w-full"
          />
        </label>
  
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Thumbnail Image URL</span>
          </div>
          <input
            type="url"
            name="imageUrl"
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full"
          />
        </label>
  
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Assignment Difficulty Level</span>
          </div>
          <select name="selectValue" className="border px-3 py-3 rounded-xl">
            <option>Select One</option>
            <option value="Easy"> Easy </option>
            <option value="Medium"> Medium </option>
            <option value="Hard"> Hard </option>
          </select>
        </label>
  
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Date</span>
          </div>
          <DatePicker
            className="border px-3 py-3 rounded-xl w-full cursor-pointer"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </label>
  
        {error && <p className="text-[#fda400]">{error}</p>}
  
        <input
          type="submit"
          className="btn bg-orange-600 hover:bg-orange-700 text-white font-semibold w-full my-5"
          value="Create Assignment"
        />
      </form>
    </div>
  </div>
  
  );
}

export default CreateAssignments;
