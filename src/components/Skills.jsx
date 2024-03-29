import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import Java from '../assets/java.png';
import Javascript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Sql from '../assets/mysql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={HTML} alr="html"/>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={CSS} alr="html"/>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={Javascript} alr="html"/>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={ReactImg} alr="html"/>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={Python} alr="html"/>
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={Java} alr="html"/>
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={Mongo} alr="html"/>
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className="w-20 mx-auto" src={Sql} alr="html"/>
                  <p className='my-4'>MySQL</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};
export default Skills;
