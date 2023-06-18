import React from "react";
import HLogo from "../../../assets/HLogo.png"

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
                    <h1>Tree Trimming Services</h1>
                        <p>Welcome to our tree trimming services page. We provide professional and efficient tree trimming services for both residential and commercial properties. Our experienced team of arborists can help keep your trees healthy and looking great.</p>
                        <h2>Our Services</h2>
                        <ul>
                          <li>Pruning and shaping of trees and shrubs</li>
                          <li>Removal of dead or diseased branches</li>
                          <li>Crown reduction and thinning</li>
                          <li>Stump grinding and removal</li>
                        </ul>
                        <h2>Contact Us</h2>
                </div>
            </div>
        </section>

    );
}