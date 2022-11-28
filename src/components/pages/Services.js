import React from "react";
import { services } from "../../data";

export default function Services() {
    return(
        <section id="services" className="">
            {services.map((service) => (
                <a
                    key={service.image}
                    className="sm:w-1/2 w-full p-4" target="blank" rel="noreferrer"
                >
                <div className="flex relative">
                    <a
                        className="absolute  w-full items-center text-justify mx-0 my-0 px-12 py-14 bg-treeTrimming bg-cover bg-center bg-no-repeat opacity-60 hover:opacity-40"
                    />
                    <p className='relative text-white text-3xl font-serif text-center'>
                        TREE TRIMMING
                    </p> 
                    <p className='relative text-white text-xl font-serif mt-6'>
                        Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
                    </p>
                </div>
            
                </a>
            ))}

            {/* 
            <img className="absolute opacity-30 hover:opacity-60" src={tree}/>
                <div className="w-full items-center text-justify mx-0 my-0 px-12 py-14">
                    <div className="flex flex-col items-center justify-center relative">
                        <h1 className=' text-white text-3xl font-serif text-center'>
                        TREE REMOVAL
                        </h1> 
                        <p className=' text-white text-xl font-serif mt-6'>
                        Every tree that you own provides your property with beautiful scenery, shade and curb appeal. Shouldn't you make sure such prominent and useful landscape features are well cared for?
                        </p>
                    </div>  
                </div>
                <div className="text-white w-full items-center text-justify mx-0 my-0 px-12 py-14 bg-treeTrimming bg-cover bg-center bg-no-repeat ">
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
                </div> */}
        </section>

    );
}