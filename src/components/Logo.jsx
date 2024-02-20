import React from 'react'

const Logo = () =>{
    const imageUrl = 'https://gizmore.in/cdn/shop/files/logo_1.png?v=1657616204&width=209'

    return (
        <div className=''>
            <img src={imageUrl} alt='Logo' className='h-13 w-auto' />
        </div>
    )
}

export default Logo