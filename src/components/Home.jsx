import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
      <p className='text-gray-300'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>GIRIJA GAYATHRI M</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FrontEnd Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Pre-final year CSE student. Driven by a passion for innovation, 
                I eagerly embrace challenges to continually expand my skills and knowledge, 
                poised to make impactful contributions to the ever-evolving field of computer science.</p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      
    </div>
  </div>
  );
};
export default Home;