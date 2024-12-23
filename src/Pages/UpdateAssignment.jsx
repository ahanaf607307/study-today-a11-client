import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

function UpdateAssignment() {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const {id} = useParams()
  const [oldData, setOldData] = useState([]);
  console.log("form update - ", oldData);

  //   load old data form old api
  useEffect(() => {
    oldDataForUpdate();
  }, []);
  const oldDataForUpdate = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/update/${id}`);
    setOldData(data);
  };

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
    console.log(assignmentData);

    axios.patch(`${import.meta.env.VITE_API}/assignments/${id}` , assignmentData)
    .then(result => {
        console.log(result.data)
        if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: "Successfully Updated!",
              text: "Do you want to continue",
              icon: "success",
            });
          }
    })
    .catch(err => {
        console.log('error from patch api update route -=> ' , err)
    })
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-orange-600 font-semibold my-8">
        Update Your Assignment - {oldData.title}
      </h1>
      <div className="md:w-[500px] lg:w-[600px] mx-auto border-2 shadow-xl p-5 my-10 rounded-xl bg-[#e0d3b8]">
        <form onSubmit={handleAssignmentSubmit}>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              name="title"
              defaultValue={oldData.title}
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
           
              defaultValue={oldData.description}
              className="input input-bordered w-full  "
            />
          </label>

          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Mark's</span>
            </div>
            <input
              type="text"
              name="marks"
              defaultValue={oldData.marks}
              className="input input-bordered w-full  "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Thumbnail Image URL</span>
            </div>
            <input
              type="text"
              name="imageUrl"
              defaultValue={oldData.imageUrl}
              className="input input-bordered w-full  "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Assignment Difficulty Level</span>
            </div>
            <select name="selectValue" defaultValue={oldData.selectValue} className="border px-3 py-3 rounded-xl">
              <option>Select One</option>
              <option value="Easy"> Easy </option>
              <option value="Medium"> Medium </option>
              <option value="Hard"> Hard </option>
            </select>
          </label>

          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <DatePicker
              className="border px-3 py-3 rounded-xl w-full cursor-pointer"
              selected={startDate}
              defaultValue={oldData.deadline} 
              onChange={(date) => setStartDate(date)}
            />
          </label>
          <input
            type="submit"
            className="btn bg-[#a3a384] w-full my-5"
            value="Create Assignment"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateAssignment;
