import React from 'react';
import HomeCarousel from '../pages/HomeCarousel';
import sideImage from '../assets/images/resumeImage.jpg'
import { Link } from 'react-router-dom';
import About from '../pages/Home/About';


const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white h-[600px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-purple-800 to-indigo-800"></div> {/* Overlay */}
  
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
    <svg
      viewBox="0 0 1440 320"
      className="absolute bottom-0 transform translate-y-1/2"
    >
      <path
        fill="rgba(255, 255, 255, 0.1)"
        d="M0,256L48,245.3C96,235,192,213,288,186.7C384,160,480,128,576,101.3C672,75,768,53,864,48C960,43,1056,53,1152,64C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10 space-y-6">
    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight ">
      Master Your <span className="text-yellow-400">Interviews</span> with <span className="text-yellow-400">AI-Powered</span> Preparation
    </h1>
    <p className="text-lg md:text-xl font-light max-w-lg mx-auto">
      Upload your resume and generate personalized interview questions based on your skills or enter a topic to generate relevant Q&A.
    </p>
    
    <div className="space-x-4">
      <button className="bg-gradient-to-br from-green-500 to-green-600 text-white py-2 md:py-4 px-4 md:px-8 rounded-full shadow-lg transform transition-transform hover:scale-110">
        <i className="fas fa-upload mr-2"></i> {/* Upload Icon */}
        Upload Your Resume
      </button>
      <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-2 md:py-4 px-4 md:px-8 rounded-full shadow-lg transform transition-transform hover:scale-110">
        <i className="fas fa-question-circle mr-2"></i> {/* Question Icon */}
        Generate Questions
      </button>
    </div>
    
    
  </div>
</section>


  <HomeCarousel/>
{/* How It Works Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">How It Works</h2>
    <p className="text-lg font-light text-gray-600 mb-12">
      Our platform uses AI to provide tailored interview questions and expert insights based on your resume or specific topics.
    </p>

    {/* Curved Cards with New Colors */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="relative bg-gradient-to-r from-blue-100 to-white p-8 rounded-tl-[60px] rounded-br-[60px] shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-blue-200 to-white">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Upload Your Resume</h3>
        <p className="text-gray-700">
          Simply upload your resume, and our system will extract your skills and generate relevant questions to help you prepare.
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative bg-gradient-to-r from-green-100 to-white p-8 rounded-tl-[60px] rounded-br-[60px] shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-green-200 to-white">
        <h3 className="text-2xl font-bold text-green-600 mb-4">Enter a Topic</h3>
        <p className="text-gray-700">
          Choose any topic, and our AI will generate comprehensive questions and answers to help you master it.
        </p>
      </div>

      {/* Card 3 */}
      <div className="relative bg-gradient-to-r from-pink-100 to-white p-8 rounded-tl-[60px] rounded-br-[60px] shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-pink-200 to-white">
        <h3 className="text-2xl font-bold text-pink-600 mb-4">Get Expert Insights</h3>
        <p className="text-gray-700">
          Along with personalized questions, we provide tips and insights from industry experts on how to answer them effectively.
        </p>
      </div>
    </div>
  </div>
</section>

<About/>

{/* Testimonials Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-extrabold mb-6 text-indigo-800">What Our Users Say</h2>
    <p className="text-lg font-light text-gray-600 mb-12">
      Thousands of users have aced their interviews with our AI-driven platform. Here’s what they say:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial Card 1 */}
      <div className="relative p-8 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-[30px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="absolute top-4 right-4 text-white text-3xl">
          <i className="fas fa-quote-right"></i> {/* Font Awesome Icon */}
        </div>
        <p className="text-white italic">
          "I was able to tailor my preparation for the exact role I was applying for. The questions were spot on!"
        </p>
        <h4 className="text-lg font-bold mt-4 text-yellow-200">- Sarah, Software Developer</h4>
      </div>
      {/* Testimonial Card 2 */}
      <div className="relative p-8 bg-gradient-to-br from-green-300 to-teal-400 rounded-[30px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="absolute top-4 right-4 text-white text-3xl">
          <i className="fas fa-quote-right"></i>
        </div>
        <p className="text-white italic">
          "This platform helped me practice with real questions based on my resume. I felt much more confident."
        </p>
        <h4 className="text-lg font-bold mt-4 text-yellow-200">- John, Data Scientist</h4>
      </div>
      {/* Testimonial Card 3 */}
      <div className="relative p-8 bg-gradient-to-br from-pink-300 to-red-400 rounded-[30px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <div className="absolute top-4 right-4 text-white text-3xl">
          <i className="fas fa-quote-right"></i>
        </div>
        <p className="text-white italic">
          "The expert tips were invaluable. They helped me refine my answers and stand out from other candidates."
        </p>
        <h4 className="text-lg font-bold mt-4 text-yellow-200">- Emily, Marketing Manager</h4>
      </div>
    </div>
  </div>
</section>



{/* Side Image */}



<div className="flex flex-col lg:flex-row items-center lg:justify-between mx-4 lg:mx-20 mt-32">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img src={sideImage} className="w-full h-auto" alt="Resume Preview" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 lg:ml-10">
        <div className="font-serif font-semibold text-2xl text-center lg:text-left">
          Unlock Your Interview
        </div>

        <p className="mt-6 lg:mt-10 font-sans text-base text-center lg:text-left">
          Prepare for your next big interview with our cutting-edge platform. Simply upload your resume, and our AI-powered tool will analyze your skills. Click the buttons below to get started.
        </p>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mt-8">
          {/* Get Started Button */}
          <button className="border border-gray-500 text-gray-500 w-full lg:w-auto px-12 py-3 rounded">
            Get Started
          </button>

          {/* Upload Resume Button */}
          <Link to='/resume' className="border border-r-blue-950 bg-blue-950 text-white w-full lg:w-auto rounded px-10 py-3">
            Upload Resume
          </Link>
        </div>
      </div>
    </div>



     {/* Call to Action Section */}
<section className="relative py-16 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="fill-current text-indigo-500">
      <path d="M0 0L1200 0V36C1054.64 83.36 904.63 110.1 748.21 110.1C476.39 110.1 236.12 16.72 0 0Z" />
    </svg>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl font-extrabold mb-4">Get Started Today</h2>
    <p className="text-xl font-light mb-8">
      Whether it's a new job or a promotion, we’re here to help you succeed. Start preparing with personalized questions now.
    </p>
    <button className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out">
      Upload Your Resume
    </button>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="fill-current text-indigo-500">
      <path d="M0 0L1200 0V36C1054.64 83.36 904.63 110.1 748.21 110.1C476.39 110.1 236.12 16.72 0 0Z" />
    </svg>
  </div>
</section>

    </div>
  );
};

export default Home;