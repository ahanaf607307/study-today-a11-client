import axios from 'axios';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

function TakeAssignment() {
const {id} = useParams()
const {user} = useContext(AuthContext)
console.log(id)
    const handleTakeAssignment = (e) => {
        e.preventDefault()
        const form = e.target;
        const googleDocs = form.googleDocs.value;
        const quickNote = form.quickNote.value
        const assignmentId = id
        const userEmail = user.email
        console.log(assignmentId)
        const takeAssignmentData = {googleDocs , quickNote ,userEmail, assignmentId }
        console.log(takeAssignmentData)
        axios.post(`${import.meta.env.VITE_API}/takeAssignment` , takeAssignmentData)
        .then(result => {
            console.log(result.data)
            if(result.data.insertedId) {
                Swal.fire({
                    title: "Successfully Take Assignment",
                    icon: "success",
                    draggable: true
                  });
            }
        })
        .catch(error => {
            console.log('error from take assignment post api -> ' , error)
        })
    }
  return (
    <div className=' w-8/12 flex flex-col justify-center items-center mx-auto '>
      <h1 className="text-4xl text-center text-orange-600 font-bold font-cardFont my-6">Take Assignment</h1>
      <form onSubmit={handleTakeAssignment} className='border-2 shadow-xl md:w-[500px] p-5 rounded-xl'>
      <div className="form-control">
          <label className="label">
            <span className="label-text"> Google Docs Link</span>
          </label>
          <input type="url" name='googleDocs' placeholder="Google Docs Link" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Quick Note</span>
          </label>
          <textarea type="text" name='quickNote' placeholder="Quick Note"  className="input input-bordered" required />
        </div>
        <input type="submit" className='btn w-full my-7 bg-orange-600 text-white' value="Take Assignment" />
      </form >
    </div>
  )
}

export default TakeAssignment
