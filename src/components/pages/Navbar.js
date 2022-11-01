import React from 'react';

export default function Navbar({ handlePageChange }) {
    return (
        <header className=''>
            <div className=''>
               <a className=''>
                    <a
                        href='about' className=''
                        onClick={() => handlePageChange('About')}>
                        Hector's Tree Service
                    </a>
                </a> 
            </div>
        </header>
    );
}