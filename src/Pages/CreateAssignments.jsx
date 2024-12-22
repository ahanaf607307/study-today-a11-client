import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
// import {format} from 'date-fns'

function CreateAssignments() {
  const [startDate, setStartDate] = useState(new Date());

  const handleAssignmentSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const description = form.description.value
    const marks = form.marks.value
    const imageUrl = form.imageUrl.value
const selectValue = form.selectValue.value
    const deadline = startDate
    const assignmentData = {title , description , marks , imageUrl , selectValue , deadline , }
    console.log(assignmentData)
    axios.post(`${import.meta.env.VITE_API}/assignments`,assignmentData)
    .then(res => {
      console.log(res.data)
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      })
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      })
    })
     .catch(error => {
      console.log('error from post api by create assignment' , error)
     })
  }

 


  return (
    <div>
      {/* An assignment will have a title, description, marks, thumbnail Image URL, assignment difficulty level(easy, medium, hard) [YOU MUST USE DROPDOWN/SELECT INPUT FIELD], and due date [use this package for selecting date “react-datepicker”] */}
      <form onSubmit={handleAssignmentSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Mark's</span>
          </div>
          <input
            type="text"
            name="marks"
            placeholder="Mark's"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Thumbnail Image URL</span>
          </div>
          <input
            type="text"
            name="imageUrl"
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Assignment Difficulty Level</span>
          </div>
          <select name="selectValue" className="border px-3 py-3 rounded-xl">
            <option >Select One</option>
            <option value="Easy"> Easy </option>
            <option value="Medium"> Medium </option>
            <option value="Hard"> Hard </option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Date</span>
          </div>
          <DatePicker className="border px-3 py-3 rounded-xl w-full cursor-pointer" selected={startDate}  onChange={(date) => setStartDate(date)} />
        </label>
        <input type="submit" className="btn bg-[#a3a384]" value="Create Assignment" />

      </form>
    </div>
  );
}

export default CreateAssignments;
