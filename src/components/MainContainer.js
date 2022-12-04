import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import TreeCare from "./pages/services/TreeCare";

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage ==='Contact') {
            return <Contact />;
        }
        if (currentPage === 'TreeCare')
            return <TreeCare />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="text-indigo-100 bg-zinc-800 w-full">
            <Router>
                <div>
                    {/* We are passing the currentPage from state and the function to update it */}
                    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                    {/* <About currentPage={currentPage} handlePageChange={handlePageChange} /> */}

                    {/* Here we are calling the renderPage method which will return a component  */}
                    {renderPage()}
                    
                    <Footer />
                </div>
            </Router>
        </main>

    );
}