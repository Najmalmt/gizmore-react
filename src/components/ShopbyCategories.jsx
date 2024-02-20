import React from 'react'
import shopcategories from '../utils/shopcategories.json'
function ShopbyCategories() {
    return (
        <div className='py-7 px-16'>
            <div className=' text-center'>
                <h2 className='mb-2 text-3xl font-medium text-center'>Shop By Categories</h2>
                <div className="border-b-4 border-orange-400 w-10 mx-auto mt-3 mb-4"></div>
            </div>
            <div className='grid grid-cols-5 gap-6 justify-items-center'>
                {shopcategories.map(category => (
                <div key={category.id} className=' w-2/5 py-6'>
                    <a href='' className='flex flex-col items-center'>
                        <img src={category.image} style={{ width: '100%', height: 'auto', marginBottom:'12px'}} alt={category.name} />
                        <p className=' text-center tracking-wide leading-normal text-xl whitespace-nowrap font-medium'>{category.name}</p>
                    </a>
                </div>  
                ))}
            </div>
        </div>
    )
}

export default ShopbyCategories