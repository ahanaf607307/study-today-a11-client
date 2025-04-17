import React from 'react';
import { Link } from 'react-router-dom';

const AddPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
             
        <div className="text-center bg-[#ff5e3b] text-white py-12 rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Be a part of a thriving educational community. Whether you're a student, teacher, or self-learner — we welcome you!
          </p>
         <Link to={`/assignment`}> <button className="bg-white text-[#ff5e3b] px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition">
            Get Started Today
          </button></Link>
        </div>
        </div>
    );
};

export default AddPage;