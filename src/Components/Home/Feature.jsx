import React from 'react'
import fOne from '../../assets/f1.png'
import fTwo from '../../assets/f2.png'
import fThree from '../../assets/f3.png'
import fFour from '../../assets/fFour.png'
import fFive from '../../assets/fFive.png'
import fSix from '../../assets/fSix.png'
import { IoBookSharp } from 'react-icons/io5'
import { GrDirections } from 'react-icons/gr'
import { GiProgression } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { FaPeopleGroup } from 'react-icons/fa6'
import { Fade } from 'react-awesome-reveal'

function Feature() {
  return (
    <section class=" flex flex-col justify-center items-center py-14 font-cardFont">
  
  <div class=" text-center">

   <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 ">Key Features of Our Application</h2>

   <h1 className='mt-4'>
   <Fade>
   <p class="mt-4 px-2 text-md text-gray-600">These features will make your tasks easier and faster.</p></Fade>
   </h1>
  </div>
  
  <div class="grid gird-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  mt-14 p-4">
    {/* <!-- Feature 1 --> */}
   <Fade>
   <div className="card bg-base-100    image-full h-fit   shadow-xl">
  <figure>
    <img
      src={fOne}
      alt="features pic" />
  </figure>
  <div className="card-body">
      <h1 className='text-7xl text-orange-500  my-2 text-center'><IoBookSharp /></h1>
   <h1 className='text-3xl font-bold text-lime-400 '>Assignment Creation</h1>
   <p className='text-md text-white/90 mt-2'>Users can create assignments, add instructions, and set deadlines for submission.
   </p>
   <p className='text-md text-white/90 mt-2'>Include file attachments and grading rubrics for detailed evaluations</p>
  </div>
</div>
   </Fade>
    {/* <!-- Feature 2 --> */}
    <Fade>
    <div className="card bg-base-100    image-full h-fit   shadow-xl">
  <figure>
    <img
      src={fTwo}
      alt="features pic" />
  </figure>
  <div className="card-body">
    <h1 className='text-7xl text-orange-500  my-2 text-center'><GrDirections /></h1>
  <h1 className='text-3xl font-bold text-lime-400 '>Collaborative Grading</h1>
   <p className='text-md text-white/90 mt-2'>Assignments can be graded by friends, encouraging peer evaluation .
   </p>
   <p className='text-md text-white/90 mt-2'>Feedback and grading reports are shared transparently.</p>
  </div>
</div>
    </Fade>
    {/* <!-- Feature 3 --> */}
    <Fade>
    <div className="card bg-base-100    image-full h-fit   shadow-xl">
  <figure>
    <img
      src={fThree}
      alt="features pic" />
  </figure>
  <div className="card-body">
    <h1 className='text-7xl text-orange-500  my-2 text-center'><GiProgression /></h1>
  <h1 className='text-3xl font-bold text-lime-400 '>Progress Tracking</h1>
   <p className='text-md text-white/90 mt-2'>View detailed progress dashboards showing completed and pending assignments .
   </p>
   <p className='text-md text-white/90 mt-2'>Real-time notifications for assignment deadlines and feedback updates.</p>
  </div>
    {/* <!-- Feature 4 --> */}
</div>

    </Fade>
{/* feature 4 */}
    <Fade>
    <div className="card bg-base-100    image-full h-fit   shadow-xl">
  <figure>
    <img
      src={fFour}
      alt="features pic" />
  </figure>
  <div className="card-body">
    <h1 className='text-7xl text-orange-500  my-2 text-center'><FaUsers /></h1>
  <h1 className='text-3xl font-bold text-lime-400 '>Discussion Forum</h1>
   <p className='text-md text-white/90 mt-2'>Integrated chat or forum for each assignment to discuss challenges or collaborate on solutions.
   </p>
   <p className='text-md text-white/90 mt-2'>Supports multimedia sharing for effective communication.</p>
  </div>
</div>
    </Fade>

  {/* <!-- Feature 5 --> */}
    <Fade>
    <div className="card bg-base-100    image-full h-fit   shadow-xl">
  <figure>
    <img
      src={fFive}
      alt="features pic" />
  </figure>
  <div className="card-body">
    <h1 className='text-7xl text-orange-500  my-2 text-center'><MdOutlineLeaderboard /></h1>
  <h1 className='text-3xl font-bold text-lime-400 '>Leaderboards & Rewards</h1>
   <p className='text-md text-white/90 mt-2'>Encourage healthy competition with leaderboards for top performers.
   </p>
   <p className='text-md text-white/90 mt-2'>Unlock badges and rewards for milestones like consistent grading or timely submissions.</p>
  </div>
    {/* <!-- Feature 6 --> */}
</div>
    </Fade>
{/* features 6 */}
    <Fade>
    <div className="card bg-base-100    image-full h-fit   shadow-xl">
  <figure>
    <img
      src={fSix}
      alt="features pic" />
  </figure>
  <div className="card-body">
    <h1 className='text-7xl text-orange-500  my-2 text-center'><FaPeopleGroup /></h1>
  <h1 className='text-3xl font-bold text-lime-400 '> Study Groups</h1>
   <p className='text-md text-white/90 mt-2'>VCreate or join study groups based on interests, subjects, or goals.
   </p>
   <p className='text-md text-white/90 mt-2'>Set privacy options to make groups public, private, or invitation-only.</p>
  </div>
</div>
    </Fade>
  </div>
</section>
  )
}

export default Feature
