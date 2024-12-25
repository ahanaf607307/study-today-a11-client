import React, { useContext } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../Context/AuthProvider";

import { format } from "date-fns";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

function AssignCard({ card, handleDelete }) {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    description,
    marks,
    imageUrl,
    selectValue,
    deadline,
    userEmail,
  } = card;

  const handleDeleteFunc = (id) => {
    if (user.email !== userEmail) {
      return errorTost();
    }
    handleDelete(id);
  };

  const errorTost = () => {
    Swal.fire({
      title: " You can Delete Only Your Created Assignment",
      icon: "error",
    });
  };
  return (
    <Fade cascade  fraction={0.2}>
      <div className="p-3 md:p-8 bg-base-100  shadow-xl rounded-xl font-cardFont">
      <div className="flex flex-col h-[440px]">
        <div>
          <h1 className="text-orange-600 font-medium">
            {" "}
            Deadline: {format(new Date(deadline), "P")}
          </h1>
          <h1 className="text-md font-semibold">
            {" "}
            Difficulty Level : {selectValue}
          </h1>
        </div>
        <div className="flex-1 my-5">
          <img src={imageUrl} className="h-56 rounded-xl w-full " alt="" />
          <h1 className="text-2xl font-semibold mt-5">{title}</h1>
        </div>
        <section className="flex items-center justify-between ">
          <Link to={`/assignmentDetails/${_id}`}>
            <button className="btn bg-transparent text-md">
              {" "}
              view assignment
            </button>
          </Link>
          <Link to={`/updateAssignment/${_id}`}>
            <button className="btn bg-transparent text-xl">
              <BiSolidEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDeleteFunc(_id)}
            disabled={!user?.email}
            className={`btn bg-transparent text-xl ${
              user?.email ? "text-red-600" : "text-gray-400 cursor-not-allowed"
            }`}
          >
            <MdDeleteForever />
          </button>
        </section>
      </div>
    </div>
    </Fade>
  );
}

export default AssignCard;
