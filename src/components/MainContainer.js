import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage ==='Contact') {
            return <Contact />;
          }
          
            return <About />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className="text-indigo-100 bg-gradient-to-r from-blue-700 to-cyan-500 body-font">
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