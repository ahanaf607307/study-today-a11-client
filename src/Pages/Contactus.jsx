import { FloatingLabel, Textarea } from 'flowbite-react';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdAttachEmail } from 'react-icons/md';
import Swal from 'sweetalert2';

const Contactus = () => {
    const  handleContact= (e) => {
        e.preventDefault()
         Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Thank You ! Please Wait Sometime ✨",
                  showConfirmButton: false,
                  timer: 1500
                });
      }
    return (
      <div id='contact' className='min-h-screen bg-white py-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-14'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Let’s Connect</h1>
          <p className='text-gray-600 text-lg md:px-28'>
            Have questions, feedback, or need help with assignments? We're just a message away.
          </p>
        </div>
    
        {/* Contact Info + Form */}
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 items-start'>
          {/* Contact Info */}
          <div className='text-gray-800 space-y-8'>
            <div>
              <h3 className='text-2xl font-semibold text-orange-500'>Call Us</h3>
              <p className='mt-2 text-lg'>+88 01000000000</p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-orange-500'>Email</h3>
              <p className='mt-2 text-lg'>studyToday@gmail.com</p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-orange-500'>Location</h3>
              <p className='mt-2 text-lg'>Rangpur, Bangladesh</p>
            </div>
          </div>
    
          {/* Contact Form */}
          <form onSubmit={handleContact} className='space-y-5 bg-gray-50 p-6 rounded-xl shadow'>
            <div>
              <label className='block mb-1 font-medium'>Full Name</label>
              <input type='text' required className='w-full border px-4 py-2 rounded-md focus:outline-orange-400' />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Email Address</label>
              <input type='email' required className='w-full border px-4 py-2 rounded-md focus:outline-orange-400' />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Your Message</label>
              <textarea rows='4' required className='w-full border px-4 py-2 rounded-md focus:outline-orange-400' placeholder='Write your message here...'></textarea>
            </div>
            <button type='submit' className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg w-full'>
              Send Message
            </button>
          </form>
        </div>
    
        {/* Additional Sections */}
        <div className='mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          <div className='p-6 rounded-lg bg-gray-100 hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Quick Help</h3>
            <p className='text-gray-600'>Need help navigating the site or submitting assignments? We’re here to guide you instantly.</p>
          </div>
          <div className='p-6 rounded-lg bg-gray-100 hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>FAQs</h3>
            <p className='text-gray-600'>Find answers to common questions related to account setup, submissions, grading, and more.</p>
          </div>
          <div className='p-6 rounded-lg bg-gray-100 hover:shadow-lg transition'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Assignment Support</h3>
            <p className='text-gray-600'>Having trouble with assignments? Our support team and student community are ready to help.</p>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default Contactus;