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
    <div className="px-1">
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-center text-orange-600 font-semibold md:my-8">
        Create Your Assignment
      </h1>
      <div className="md:w-[500px] lg:w-[800px] w-full  mx-auto border-2 shadow-xl p-5 my-10 rounded-xl bg-no-repeat bg-center  bg-cover bg-updatebg ">
        <form onSubmit={handleAssignmentSubmit}>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered w-full  "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full  "
            />
          </label>

          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Mark's</span>
            </div>
            <input
              type="number"
              name="marks"
              placeholder="Mark's"
              className="input input-bordered w-full  "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Thumbnail Image URL</span>
            </div>
            <input
              type="url"
              name="imageUrl"
              placeholder="Thumbnail Image URL"
              className="input input-bordered w-full  "
            />
          </label>
          <label className="form-control w-full  ">
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
      {error && <p className="text-lime-500">{error}</p>}
          <input
            type="submit"
            className="btn bg-[#71ca1e] text-white/90 w-full my-5"
            value="Create Assignment"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAssignments;
