import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Bestofheader() {

    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='px-1 py-4'>
            <h2 className='mb-2 text-3xl font-medium text-center font-poppins'>Best Of Gizmore
                <div className="border-b-4 border-orange-400 w-10 mx-auto mt-3 mb-4"></div>
            </h2>
            <nav>
                <ul className='flex justify-center '>
                    <li className=' py-0 px-4'>
                        <Link to="/" className={`button ${activeLink === '/bestsellers' ? 'active' : ''} `} onClick={() => handleClick('/bestsellers')}>Best Seller</Link>
                    </li>
                    <li className=' py-0 px-4'>
                        <Link to="/smartwatch" className={`button ${activeLink === '/bestsellers' ? 'active' : ''}`} onClick={() => handleClick('/bestsellers')}>Smart Watches</Link>
                    </li>
                    <li className=' py-0 px-4'>
                        <Link to="/truewirelessterio" className={`button ${activeLink === '/bestsellers' ? 'active' : ''}`} onClick={() => handleClick('/bestsellers')}>True Wireless Stereo</Link>
                    </li>
                    <li className=' py-0 px-4'>
                        <Link to="/neckband" className={`button ${activeLink === '/bestsellers' ? 'active' : ''}`} onClick={() => handleClick('/bestsellers')}>Neckband</Link>
                    </li>
                    <li className=' py-0 px-4'>
                        <Link to="/btspeakers" className={`button ${activeLink === '/bestsellers' ? 'active' : ''}`} onClick={() => handleClick('/bestsellers')}>BT Speakers</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Bestofheader;
