import React from 'react';

const HowItWorks = () => {
    return (
        <div className='max-w-7xl mx-auto'>
             <div className="mb-20">
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
    );
};

export default HowItWorks;