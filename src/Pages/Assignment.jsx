import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AssignmentCard from './AssignmentCard'

function Assignment() {
const [assignments , setAssignments] = useState([])
  useEffect(()=> {
   fetchAllAssignments()
  } , [])

  const fetchAllAssignments = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/assignments`)
    setAssignments(data)
    console.log(data)
   
  }
  return (
    <div className='p-10 bg-cyan-50/50'>
      <h1 className='my-10 text-3xl font-bold text-center'>Total Assignment's - {assignments.length}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 '>
      {
        assignments?.map(card => <AssignmentCard key={card?._id} card={card} />)
      }
    </div>
    </div>
  )
}

export default Assignment
