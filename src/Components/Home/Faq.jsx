import React from 'react'
import { Fade } from 'react-awesome-reveal'

function Faq() {
  return (
    <div className="pb-16 relative">
    <div className="flex flex-col justify-center items-center w-full font-cardFont max-w-7xl mx-auto px-4">
      
      <Fade>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-center drop-shadow-md">
          Do You Have Any Question?
        </h1>
      </Fade>
  
      <Fade>
        <p className="mt-4 mb-10 text-center text-lg md:text-xl font-semibold text-gray-800 italic">
          We Have Answer, Well… Most Of The Time 😉
        </p>
      </Fade>
  
      <div className="join join-vertical w-full text-black/90 space-y-3">
        {[
          {
            q: "1. How can I create an assignment?",
            a: "To create an assignment, go to the Assignments section and click on 'Create New Assignment.' Fill in the title, description, deadline, and any additional instructions or files, then save it. Your group members will be notified immediately.",
          },
          {
            q: "2. Can I limit who can grade my assignment?",
            a: "Yes, during assignment creation, you can select specific group members as graders or allow the entire group to participate in grading.",
          },
          {
            q: "3. How does the grading process work?",
            a: "Once submissions are uploaded, selected graders can access the assignments, provide feedback, and assign grades. You can also use the grading rubric to ensure consistent evaluation.",
          },
          {
            q: "4. How do I join or create a study group?",
            a: "Go to the Study Groups section. You can search for existing groups by topic or create a new group by clicking on 'Create Group,' naming it, and inviting members.",
          },
          {
            q: "5. What happens if I miss a deadline?",
            a: "Missed assignments are marked as overdue, and notifications are sent to both the creator and the assignee. You can request an extension from the assignment creator if needed.",
          },
          {
            q: "6. Is there a way to track my progress?",
            a: "Yes! Visit your Dashboard to view a summary of your completed assignments, grades received, and pending tasks. You can also see detailed analytics like average grading time and submission rates.",
          },
        ].map((item, idx) => (
          <div key={idx} className="collapse collapse-arrow join-item border border-gray-200 shadow-sm rounded-lg">
            <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
            <div className="collapse-title text-lg md:text-xl font-medium text-gray-900">
              {item.q}
            </div>
            <div className="collapse-content text-gray-700 text-base leading-relaxed">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default Faq
