import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import useCustomAxiosSecure from "../Components/CustomHook/CustomAxios";
import Loading from "../Authentication/Loading";


function MyAttempted() {
  const { user } = useContext(AuthContext);
const customAxiosSecure = useCustomAxiosSecure()
  const [myAttempted, setMyAttemped] = useState([]);
    const [loadingSpinner, setLoadingSpinner] = useState(true)

  useEffect(() => {
    fetchAttemptedData();
  }, []);

  const fetchAttemptedData = async () => {
    const { data } = await customAxiosSecure.get(
      `/takeAssignment/${user?.email}`);
      setLoadingSpinner(false)
    setMyAttemped(data);
  };
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl my-10 text-orange-600 font-cardFont font-bold text-center">
        {myAttempted?.length} Attempted By - {user?.displayName}{" "}
      </h1>
      {
        loadingSpinner ? <Loading/>  : <section>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Statis</th>
                <th>Assignment Marks</th>
                <th>Obtained Marks</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {myAttempted.map((attempt, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{attempt?.title ?? "N/A"}</td>
                  <td
                    className={`${
                      attempt?.status === "pending"
                        ? "text-red-500 font-bold text-md"
                        : "text-green-500 font-bold text-md"
                    }`}
                  >
                    {attempt?.status ?? "N/A"}
                  </td>
                  <td>{attempt?.marks ?? "N/A"}</td>
                  <td>
                    {attempt?.obtainedMarks ? attempt?.obtainedMarks : "N/A"}
                  </td>
                  <td>{attempt?.feedback ? attempt?.feedback : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      }
    </div>
  );
}

export default MyAttempted;
