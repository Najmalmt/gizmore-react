import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";

function Navbar_2() {
    return (
        <>
            <div className='header flex items-center justify-between h-10  px-3'>
                <div className='bg-zinc-100 px-3 py-2 rounded-3xl'>
                    <SearchInput />
                </div>
                <div className='flex items-center text-3xl px-2 ml-2'>
                    <LuUser2 />
                    <div className='ml-5'>
                        <LiaShoppingBagSolid />
                    </div>
                </div>
            </div>
        </>
    );
}

function SearchInput() {
    return (
        <>
            <div className='search-input flex items-center'>
                <IoSearchOutline className='text-black text-2xl' />
                <input type="text" placeholder="Search" className='outline-none bg-zinc-100 w-64 text-black' />
            </div>
        </>
    );
}
export default Navbar_2