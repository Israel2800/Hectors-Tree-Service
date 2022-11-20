import React from 'react';
import HLogo from "../../assets/HLogo.png";
import tree from "../../assets/images/1.jpg";
import Testimonials from './Reviews';

export default function About({handlePageChange}) {
    return(
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow  flex flex-col  mb-16 md:mb-0 items-center text-center">
            <img
                    className="object-cover object-center rounded-lg mb-8 leading-relaxed text-justify"
                    alt="hero"
                    src={HLogo}
                    style={{width:"200px", height:"200px"}}
            />
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
              <p className="lg:inline-block">
                YOUR TREES DESERVE A PROFESSIONAL CARE
              </p>
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Hector's Tree Service provides reliable tree care services in La Vergne, Brentwood, Smyrna & 
              Mt. Juliet, TN
            </p>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg"
                onClick={() => handlePageChange('Contact')}>
                Contact Me
              </a>
              {/* <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                onClick={() => handlePageChange('Projects')}>
                See My Projects
              </a> */}
            </div>
          </div>
          

        </div>
        {/* Second section */}
        <div className="flex px-10 py-20 md:flex-row flex-col items-center bg-white">
          <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center">
            <p className='text-green-600 text-3xl font-serif'>
              We will maintain your space clean and beautiful
            </p> 
            <p className='text-green-800 text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
              To provide your tree with top-notch care, enlist a reputable tree care company. In La Vergne, Brentwood, Smyrna & Mt. Juliet, TN and surrounding areas, G Professional Tree Service is here to help. We'll give every tree the attentive services that it deserves.
            </p>
          </div>
        </div>
        
        {/* Third section */}
        <div className=" px-10 py-20 flex flex-wrap sm:flex-row sm:justify-around">
          <div className="sm:w-1/3 h-72 items-center text-justify mx-5 my-5 bg-cover bg-center px-5" style={{backgroundImage: `url(${tree})`}}>
            <p className='text-white text-3xl font-serif'>
              We will maintain your space clean and beautiful
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
          <div className="sm:w-1/3 h-72 items-center text-justify mx-5 my-5 bg-emerald-700">
            <p className='text-white text-3xl font-serif'>
              We will maintain your space clean and beautiful
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
          <div className="sm:w-1/3 h-72 items-center text-justify mx-5 my-5 bg-emerald-700">
            <p className='text-white text-3xl font-serif'>
              We will maintain your space clean and beautiful
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
          <div className="sm:w-1/3 h-72 items-center text-justify mx-5 my-5 bg-emerald-700">
            <p className='text-white text-3xl font-serif'>
              We will maintain your space clean and beautiful
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="flex px-10 py-20 md:flex-row flex-col items-center bg-slate-600">
          <Testimonials />
        </div>
       
      </section>
    );
    
}