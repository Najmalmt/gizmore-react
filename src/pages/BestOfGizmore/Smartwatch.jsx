import React from 'react'
import ProductData from '../../utils/Best of Gizmore/smartwatch.json'
import { AiFillStar } from "react-icons/ai"

function Smartwatch() {
    return (<>
        <div className='py-7 px-16'>
        <div className="grid grid-cols-4 gap-4">
            {ProductData.map((product, index) => (
                <div key={product.id}>
                    <div className='rounded-lg bg-gray-100'>
                        <div className=' relative'>
                            <div className=' absolute bottom-50'>
                                <h4 className=' bg-orange-500 text-white text-xs font-semibold py-1 px-2'>{product.offers}</h4>
                            </div>
                            <img src={product.image} alt={product.name} className="w-full h-auto" />
                        </div>
                        <div className=' py-7 px-7'>
                            <div className='flex justify-between'>
                                <div className="flex justify-center items-center">
                                    <h4>5.0</h4>
                                    <AiFillStar />
                                </div>
                                <div className="flex justify-between">
                                    {product.colors && product.colors.map((color, index) => (
                                        <div
                                            key={index}
                                            className={`w-4 h-4 rounded-full ml-1 cursor-pointer ${index === 0 ? 'relative' : 'relative'}`}
                                            style={{ backgroundColor: color }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-between gap-2 items-center'>
                                <div className=''>
                                    <h4 className=' text-sm font-semibold whitespace-break-spaces'>{product.name}</h4>
                                    <div className='flex'>
                                        <p className='mr-1 text-orange-500'>{product.newPrice}</p>
                                        <del className=' text-sm text-gray-400 mt-0.5'>{product.prevPrice}</del>
                                    </div>
                                </div>
                                <div className=' pt-7'>
                                    <button className="h-8 px-2 ml-1 text-sm text-white transition-colors duration-150 bg-black rounded-md focus:shadow-outline">
                                        Add&nbsp;to&nbsp;Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>)
}

export default Smartwatch