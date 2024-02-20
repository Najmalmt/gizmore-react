import React from 'react'
import NavLinks from './NavbarLinks';
import Logo from './Logo';
import Navbar_2 from './Navbar_2';
import Heroslider from './Slider/Heroslider';

function Navbar() {
    return (<>
            <div className='sticky top-0 py-5 px-12 flex items-center bg-fff  justify-between z-10 bg-white'>
                <div className='flex items-center'>
                    <div className=' mr-4'>
                        <Logo/>
                    </div>
                    <div className=''>
                        <NavLinks/>
                    </div>
                </div>
                <div className='flex items-center' >
                    <Navbar_2/>
                </div>
            </div>
    </>)
}

export default Navbar;  