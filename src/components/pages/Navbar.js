import React from 'react';
import HLogo from '../../assets/HLogo.png';

export default function Navbar({ handlePageChange }) {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 pt-12 m- md:flex-row items-center justify-center">
                {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a 
                        href="#about" className="ml-3 text-xl"
                        onClick={() => handlePageChange('About')}>
                        
                    </a>
                </a> */}
                <nav className=" md:py-1  md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                {/* <a 
                    href="#projects" className="mr-5 hover:text-white"
                    onClick={() => handlePageChange('Projects')}>
                    Projects
                </a>
                <a 
                    href="#skills" className="mr-5 hover:text-white"
                    onClick={() => handlePageChange('Skills')}>
                    Skills
                </a> */}
                </nav>
                <a 
                    href="#services" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    onClick={() => handlePageChange('Services')}>
                    Services
                </a>
                {/* <a 
                    href="#gallery" className=" hover:text-white inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    
                    onClick={() => handlePageChange('Gallery')}>
                    Gallery
                </a> */}
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    onClick={() => handlePageChange('Contact')}>
                    Contact Us!
                    {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
                </a>
            </div>
        </header>
    );
}