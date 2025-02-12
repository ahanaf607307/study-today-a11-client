import React from "react";

const About = () => {
  return (
    <div id="about" className=" min-h-screen bg-assignmentBg bg-cover bg-center">
     <div className='bg-black/70 min-h-screen '>
     <div className="max-w-7xl mx-auto pt-44">
        <h1 className="text-3xl lg:text-5xl text-white my-4 md:my-8 lg:my-14 text-center font-bold">
          About Us
        </h1>
        <p className="text-xl text-center font-semibold text-[#ff5e3b]">
          Our mission is to accelerate yours.
        </p>
        <div className="p-4">
          <h1 className="text-md text-white my-7">
            “We are committed to providing the best tools and resources to
            empower WordPress professionals, educators, and course creators to
            share their knowledge and skills with the world. As an independently
            owned and operated company that values humanity in business, we
            pride ourselves on being able to respond quickly to the needs of our
            users. Thank you for choosing LifterLMS. We can’t wait to see what
            you will create and share with the world.”
          </h1>
          <p className="text-2xl  font-semibold text-white">
            - CEO & Founder - Ahanaf Mubasshir{" "}
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-3xl lg:text-5xl text-white my-8 font-semibold">
            Education is our mission.
          </h1>
         <div className="flex flex-col justify-center items-center py-10">
            <p className="text-xl text-white/90">
            We help education entrepreneurs to help their learners achieve desired outcomes, to truly change lives, and make a great living in the process.

We help them by creating the software, strategies, community, and training to grow high value online courses or training based membership websites from nothing.

The change we want to make is to democratize learning in the digital classroom, to put power in the hands of education entrepreneurs, and help as many people as we can to reach their dreams.

We’ll know we are successful when we are seen as the organization that can help any education entrepreneur that is on a mission to help their learners overcome problems, capture opportunity, and make a huge impact in their community.

We’ll know we are successful when our education entrepreneurs consistently achieve financial, location, and creative freedom.

We’ll know we are successful in the WordPress community when we are seen as the model for how to do freemium in WordPress.

We will create our legacy by changing lives for WordPress LMS site building professionals, our customers, their learners, our families, our communities, and the world in every way we can.


            </p>
         </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default About;
