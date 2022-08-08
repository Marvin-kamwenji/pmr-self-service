import React from 'react';
import pmrlogo from '../Assets/Logo/pmrlogo.ico'

function NavBar() {
    return ( 
        <nav className="bg-navBarBackgroundColor px-2 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a className="flex items-center">
                    <img src={pmrlogo} className="mr-3 h-6 sm:h-9" alt="pay my rent logo" />
                    <span className=" self-center text-xl font-semibold text-navBarTextColor">Pay My Rent Self Registration</span>
                </a>
            </div>
        </nav>
     );
}

export default NavBar;