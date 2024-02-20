import React from 'react'
import futuresData from '../utils/futures.json'
function Futures() {
    return (
        <div className='py-7 px-16'>
            <div className='flex justify-between'>
                {futuresData.map((data) => (
                    <div key={data.id} className='flex flex-col items-center py-8 px-8'>
                        <div className='w-24'>
                            <img src={data.image} alt={`Slider Img ${data.id}`} style={{ width: '100vw', height: 'auto' }} />
                        </div>
                        <h2 className=' font-bold text-lg mt-2'>
                            {data.description}              
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Futures