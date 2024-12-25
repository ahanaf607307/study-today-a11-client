import axios from 'axios';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';


function TakeAssignment() {

const {id} = useParams()
const {user} = useContext(AuthContext)

    const handleTakeAssignment = (e) => {
        e.preventDefault()
        const form = e.target;
        const googleDocs = form.googleDocs.value;
        const quickNote = form.quickNote.value
        const assignmentId = id
        const submitedBy = user.email
        const submiterName = user.displayName
        const status = 'pending'
        const obtainedMarks = ''
        const feedback = ''
  
        const takeAssignmentData = {googleDocs , quickNote ,submitedBy, assignmentId , status , submiterName , obtainedMarks ,feedback }
        axios.post(`${import.meta.env.VITE_API}/takeAssignment` , takeAssignmentData)
        .then(result => {
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
    <div className='w-full md:w-8/12 flex flex-col justify-center items-center mx-auto px-2'>
      <h1 className="text-4xl text-center text-orange-600 font-bold font-cardFont my-6">Take Assignment</h1>
      <form onSubmit={handleTakeAssignment} className='border-2 w-full  shadow-xl md:w-[500px] p-5 rounded-xl'>
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
        <input type="submit" className='btn w-full my-7 bg-orange-600 text-white' value="Submit" />
      </form >
    </div>
  )
}

export default TakeAssignment
