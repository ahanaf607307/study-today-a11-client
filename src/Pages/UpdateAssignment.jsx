import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Authentication/Loading";
import useCustomAxiosSecure from "../Components/CustomHook/CustomAxios";
import { AuthContext } from "../Context/AuthProvider";

function UpdateAssignment() {
  const customAxiosSecure = useCustomAxiosSecure()
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [oldData, setOldData] = useState([]);
  const [selectedValue, setSelectedValue] = useState(
    oldData?.selectValue || ""
  );
  const [loadingSpinner, setLoadingSpinner] = useState(true)
const navigate = useNavigate()

  useEffect(() => {
    oldDataForUpdate();
  }, []);
  
  useEffect(() => {
    if (oldData?.deadline) {
      setStartDate(new Date(oldData.deadline));
    }
  }, [oldData]);

  
  useEffect(() => {
    oldDataForUpdate();
  }, []);

  useEffect(() => {
    if (oldData?.selectValue) {
      setSelectedValue(oldData.selectValue);
    }
  }, [oldData]);

  //   load old data form old api

  useEffect(() => {
    oldDataForUpdate();
  }, []);
  const oldDataForUpdate = async () => {
    const { data } = await customAxiosSecure.get(
      `/updateDetails/${id}`
    );
    setLoadingSpinner(false)
    setOldData(data);
  };

  const handleAssignmentSubmit = (e) => {
    const errorTost = () => {
      Swal.fire({
        title: " You can Update Only Your Created Assignment",
        icon: "error",
      });
    };
    e.preventDefault();
// if user not logged in he can't update data 
    if (!user?.email) {
      return Swal.fire({
        title: " Please Login Your Account",
        icon: "error",
      });
    }
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

    // Another User Can't Update Another User Data

    if (user.email !== oldData.userEmail) {
      return errorTost();
    }

    axios
      .patch(`${import.meta.env.VITE_API}/assignments/${id}`, assignmentData)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully Updated!",
            text: "Do you want to continue",
            icon: "success",
          });
          navigate('/assignment')
        }
      })
      .catch((err) => {
        console.log("error from patch api update route -=> ", err);
      });
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="font-cardFont px-4 md:px-10 mt-20 lg:px-32 py-10 bg-white text-gray-800">
    {/* Header Section */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-600 mb-6">
      Update Your Assignment - {oldData.title}
    </h1>
  
    {/* Optional Info Section */}
    <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-xl mb-10 shadow-md">
      <h2 className="text-xl font-semibold mb-2">📝 Why Update Your Assignment?</h2>
      <p className="text-sm text-gray-700">
        Keeping your assignments up-to-date ensures clarity, accuracy, and better communication
        with students. Make sure to revise marks, deadline, and difficulty as necessary.
      </p>
    </div>
  
    {/* Assignment Update Form */}
    <div className="max-w-4xl mx-auto border border-gray-300 shadow-xl p-6 rounded-2xl bg-white">
      {
        loadingSpinner ? <Loading /> : (
          <form onSubmit={handleAssignmentSubmit} className="space-y-5">
            <div>
              <label className="label-text font-medium">Title</label>
              <input type="text" name="title" defaultValue={oldData.title} className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label-text font-medium">Description</label>
              <textarea name="description" defaultValue={oldData.description} className="textarea textarea-bordered w-full h-32" />
            </div>
  
            <div>
              <label className="label-text font-medium">Marks</label>
              <input type="text" name="marks" defaultValue={oldData.marks} className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label-text font-medium">Thumbnail Image URL</label>
              <input type="url" name="imageUrl" defaultValue={oldData.imageUrl} className="input input-bordered w-full" />
            </div>
  
            <div>
              <label className="label-text font-medium">Assignment Difficulty Level</label>
              <select name="selectValue" value={selectedValue} onChange={handleChange} className="select select-bordered w-full">
                <option value="" disabled>Select One</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
  
            <div>
              <label className="label-text font-medium">Submission Deadline</label>
              <DatePicker
                className="input input-bordered w-full cursor-pointer"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
  
            <input type="submit" className="btn bg-[#fda400] text-white font-semibold w-full" value="Update" />
          </form>
        )
      }
    </div>
  
    {/* Extra Section: Assignment Tips */}
    <div className="mt-16 p-6 bg-gray-100 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">📌 Assignment Update Tips</h2>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        <li>Be specific and concise in the description.</li>
        <li>Update the difficulty based on the new content or criteria.</li>
        <li>Ensure the deadline is realistic and student-friendly.</li>
        <li>Use a high-quality thumbnail that reflects the topic.</li>
      </ul>
    </div>
  
    {/* Extra Section: Submission Guidelines */}
    <div className="mt-10 p-6 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-3">📚 Submission Guidelines</h2>
      <p className="text-sm text-gray-700">
        Make sure to check all fields before updating. Once updated, students will receive
        a notification about the change. Ensure consistency in marks, difficulty level, and deadline.
      </p>
    </div>
  </div>
  
  );
}

export default UpdateAssignment;
