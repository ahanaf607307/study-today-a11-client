import React from 'react';

const Aboutus = () => {
    return (
      <div id="about" className="min-h-screen bg-white py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* About Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black">About Us</h1>
          <p className="text-lg md:text-xl font-medium text-[#ff5e3b] mt-4">Our mission is to accelerate yours.</p>
          <p className="text-base md:text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
            We are committed to building a global study community where students can collaborate, take assignments, and support each other on their academic journey.
          </p>
        </div>
    
        {/* CEO Quote */}
        <div className="bg-[#f9f9f9] rounded-xl p-8 md:p-12 shadow-md mb-20">
          <p className="text-lg md:text-xl italic text-gray-800 leading-relaxed">
            “We aim to democratize learning and empower students by offering tools, strategies, and a collaborative environment. This is more than just a platform — it’s a movement to change lives.”
          </p>
          <p className="text-right text-xl mt-6 font-semibold text-black">— Ahanaf Mubasshir, CEO & Founder</p>
        </div>
    
        {/* Our Mission */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Education is Our Mission</h2>
          <p className="text-base md:text-lg text-gray-700 mt-6 max-w-4xl mx-auto">
            Our goal is to help learners achieve their potential through an assignment-driven, interactive, and personalized learning experience. We want to create an impact that not only helps students academically but also builds their confidence and skills for real-world success.
          </p>
        </div>
    
        {/*  How It Works */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#ff5e3b] mb-4">Create Assignments</h3>
              <p className="text-gray-700">
                Easily create and share assignments with your friends or students. Set deadlines, instructions, and difficulty levels.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#ff5e3b] mb-4">Submit & Review</h3>
              <p className="text-gray-700">
                Submit assignments and get feedback from peers or mentors. Learning becomes more meaningful with collaboration.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#ff5e3b] mb-4">Track Progress</h3>
              <p className="text-gray-700">
                Stay motivated with your personalized dashboard. Track your assignment progress, achievements, and improvements.
              </p>
            </div>
          </div>
        </div>
    
       
      </div>
    </div>
    
    );
};

export default Aboutus;