import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

function NavbarLinks() {
    return (<>
            <nav className='text-black items-center font-lato'>
                <ul className='flex space-x-5 uppercase text-base cursor-pointer font-medium'>
                    <li className='flex justify-between items-center text-base'>
                        categories <RiArrowDropDownLine className='text-2xl items-center cursor-pointer '/>
                    </li>
                    <li>
                        daily deals
                    </li>
                    <li>
                        more
                    </li>
                </ul>
            </nav>
    </>)
}

export default NavbarLinks