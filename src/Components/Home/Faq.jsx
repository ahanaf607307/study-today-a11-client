import { div } from 'motion/react-client'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

function Faq() {
  return (
    <div className='flex flex-col justify-center items-center w-full font-cardFont'>
      <Fade>
      <h1 className='text-3xl px-5 md:text-4xl lg:text-5xl font-bold text-orange-600 text-center'>Do You Have Any Question ? </h1>
      </Fade>

<Fade>

<p className='mt-4 mb-10 px-4 text-center text-xl font-semibold text-gray-500'>We Have Answer , Wel Most Of The Time</p>
</Fade>

<div className="join join-vertical w-full">
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-xl font-medium">1. How can I create an assignment?</div>
      <div className="collapse-content">
        <p>To create an assignment, go to the Assignments section and click on "Create New Assignment." Fill in the title, description, deadline, and any additional instructions or files, then save it. Your group members will be notified immediately.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">Can I limit who can grade my assignment?</div>
      <div className="collapse-content">
        <p>Yes, during assignment creation, you can select specific group members as graders or allow the entire group to participate in grading.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">3. How does the grading process work?</div>
      <div className="collapse-content">
        <p>Once submissions are uploaded, selected graders can access the assignments, provide feedback, and assign grades. You can also use the grading rubric to ensure consistent evaluation.</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">4. How do I join or create a study group?</div>
      <div className="collapse-content">
        <p>Go to the Study Groups section. You can search for existing groups by topic or create a new group by clicking on "Create Group," naming it, and inviting members.
</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">5. What happens if I miss a deadline?</div>
      <div className="collapse-content">
        <p>Missed assignments are marked as overdue, and notifications are sent to both the creator and the assignee. You can request an extension from the assignment creator if needed.
</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">6. Is there a way to track my progress?</div>
      <div className="collapse-content">
        <p>Yes! Visit your Dashboard to view a summary of your completed assignments, grades received, and pending tasks. You can also see detailed analytics like average grading time and submission rates
</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Faq
