import React from 'react';
import HLogo from "../../assets/HLogo.png";
import tree from "../../assets/images/1.jpg";
import Testimonials from './Testimonials';
import { GiFruitTree } from "@react-icons/all-files/gi/GiFruitTree"
import { GiTreeBranch } from "@react-icons/all-files/gi/GiTreeBranch"

export default function About({handlePageChange}) {
    return(
      <section id="about">
        <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-mainImage bg-cover bg-fixed bg-center bg-no-repeat opacity-60 hover:opacity-100">
          <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center">
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
        
        {/* Icon section */}
        <div className="flex px-10 pt-20 flex-row bg-white justify-center">
          {/* Change to image */}
          <GiTreeBranch className="w-12 h-full inline-block text-green-600"/> 
        </div>
        {/* Second section */}
        <div className="flex px-10 pt-5 pb-20 md:flex-row flex-col items-center bg-white">
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
        <div className="px-0 py-0 grid md:grid-cols-2 bg-slate-600">
          <div className="w-full items-center text-justify mx-0 my-0 px-12 py-14 bg-treeRemoval bg-cover bg-center bg-no-repeat opacity-70 hover:opacity-60">
            <p className='text-white text-3xl font-serif text-center'>
              TREE REMOVAL
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
          <div className="w-full items-center text-justify mx-0 my-0 px-12 py-14 bg-treeTrimming bg-cover bg-center bg-no-repeat opacity-70 hover:opacity-60">
            <p className='text-white text-3xl font-serif text-center'>
              TREE TRIMMING
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
          <div className="w-full items-center text-justify mx-0 my-0 px-12 py-14 bg-stumpRemoval bg-cover bg-center bg-no-repeat opacity-70 hover:opacity-60">
            <p className='text-white text-3xl font-serif text-center'>
              STUMP REMOVAL
            </p> 
            <p className='text-white text-xl font-serif mt-6'>
              Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
            </p>
          </div>
          <div className="w-full items-center text-justify mx-0 my-0 px-12 py-14 bg-treeCare bg-cover bg-center bg-no-repeat opacity-70 hover:opacity-60">
            <p className='text-white text-3xl font-serif text-center'>
              TREE CARE
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

        {/* Fifth Section */}
        <div className="flex px-10 py-20 md:flex-row flex-col  bg-white justify-center">
          <p className="text-4xl text-center">
            ARRANGE FOR EXCELLENT TREE SERVICE IN LA VERGNE, BRENTWOOD, SMYRNA & MT. JULIET, TN
          </p>
        </div>

        {/* Sixth Section */}
        <div className="flex px-10 py-20 flex-wrap bg-emerald-700 justify-center w-full bg-section6 bg-cover bg-fixed bg-center bg-no-repeat opacity-70 hover:opacity-80">
          <div className=' my-2'>
            <p className="text-6xl text-center mb-5">
              What do we offer to you?
            </p>
            <p className="text-2xl text-justify">
              We'll tend to your trees in several ways. We offer a variety of tree care services, including:
            </p>
          </div>
          <div className="px-10 py-20 flex flex-wrap sm:justify-around w-full">
              <div className="h-12 items-center text-center mx-5 my-5 bg-cover bg-center px-5">
                <p className="text-3xl ">
                  01
                </p>
                <p className="text-2xl">
                  Box 1
                </p>
              </div>
              <div className="h-12 items-center text-center mx-5 my-5 bg-cover bg-center px-5">
                <p className="text-3xl ">
                  02
                </p>
                <p className="text-2xl ">
                  Box 2
                </p>
              </div>
              <div className="h-12 items-center text-center mx-5 my-5 bg-cover bg-center px-5">
                <p className="text-3xl ">
                  03
                </p>
                <p className="text-2xl ">
                  Box 3
                </p>
              </div>
          </div>
        </div>
        
        {/* Section 7 */}
        <div className="flex px-10 pt-20 flex-row bg-white justify-center">
          {/* Change to image */}
          <GiTreeBranch className="w-12 h-full inline-block text-green-600"/> 
        </div>
        
        {/* Section 8 */}
        <div className="flex px-10 py-20 flex-row bg-white justify-center">
          <p className="px-4 text-4xl w-1/2 text-right">
            ARRANGE FOR EXCELLENT TREE SERVICE IN LA VERGNE, BRENTWOOD, SMYRNA & MT. JULIET, TN
          </p>
          <p className="px-4 text-4xl w-1/2 text-left">
            The second part of the text!
          </p>
        </div>
       
      </section>
    );
    
}