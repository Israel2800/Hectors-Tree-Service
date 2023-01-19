import React from "react";

export default function Trimming() {
    return(
        <section className="">
            <div className="container">
                <img 
                    className= "absolute w-full h-full bg-treeRemoval bg-cover bg-no-repeat opacity-60"
                    alt="hero"
                    src={HLogo}
                    style={{width:"200px", height:"200px"}}
                />
                <div>
                    <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <p className="lg:inline-block">
                            YOUR TREES DESERVE A PROFESSIONAL CARE
                        </p>
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                        Hector's Tree Service provides reliable tree care services in La Vergne, Brentwood, Smyrna & 
                        Mt. Juliet, TN
                    </p>
                </div>
            </div>
        </section>

    );
}