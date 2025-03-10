import React from "react";
import HLogo from "../../../assets/HLogo.png";

export default function TreeRemoval({ handlePageChange }) {
    return(
        <section className="">
            <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-treeR bg-cover bg-fixed bg-center bg-no-repeat bg-opacity-75 hover:opacity-100">
                <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center ">
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
                    <p>We offer professional tree removal services for both residential and commercial properties. Our experienced team can safely and efficiently remove any unwanted trees from your property.</p>
                    <h2>Services Offered:</h2>
                    <ul>
                      <li>Tree removal</li>
                      <li>Stump grinding</li>
                      <li>Tree trimming</li>
                      <li>Emergency tree removal</li>
                    </ul>

                    <div className="flex justify-center">
                        <a
                            href="#Contact"
                            className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg"
                            onClick={() => handlePageChange('Contact')}>
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}