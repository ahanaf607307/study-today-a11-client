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
    <div className="font-cardFont ">
      
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold text-orange-600'>   Update Your Assignment - {oldData.title}
      </h1>
      <div className="md:w-[500px] lg:w-[800px] mx-auto border-2 shadow-xl p-5 my-10 rounded-xl bg-no-repeat bg-center  bg-cover bg-updatebg">
        {
          loadingSpinner ? <Loading/> : <form onSubmit={handleAssignmentSubmit}>
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
              type="url"
              name="imageUrl"
              defaultValue={oldData.imageUrl}
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Assignment Difficulty Level</span>
            </div>
            <select
              name="selectValue"
              value={selectedValue}
              onChange={handleChange}
              className="border px-3 py-3 rounded-xl"
            >
              <option value="" disabled>
                Select One
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>

          <label className="form-control w-full  ">
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <DatePicker
  className="border px-3 py-3 rounded-xl w-full cursor-pointer"
  selected={startDate}
  onChange={(date) => setStartDate(date)}
/>

          </label>
          <input
            type="submit"
            className="btn bg-[#a9e224] w-full my-5"
            value="Update"
          />
        </form>
        }
      </div>
    </div>
  );
}

export default UpdateAssignment;
