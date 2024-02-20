import React from 'react'
import HighlightImage1 from '../assets/images/HighlightImage.jpg' 
function HighlightImage() {
    return (
        <div>
            <h2 >
                <img src={HighlightImage1} alt='Slider Img 2' style={{ width: '100vw', height: 'auto' }}/>
            </h2>
        </div>
    )
}

export default HighlightImage


// import React from 'react'
// import shopcategories from '../utils/shopcategories.json'
// function ShopbyCategories() {
//     return (
//         <div className='py-7 px-12'>
//             <div>
//                 <h2>Shop By Categories</h2>
//             </div>
//             <div className='flex flex-wrap'>
//                 {shopcategories.map(category => (
//                 <div key={category.id} className='w-1/4'>
//                     <a href=''>
//                     <img src={category.image} style={{ width: '100%', height: 'auto' }} alt={category.name} />
//                     <p>{category.name}</p>
//                     </a>
//                 </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default ShopbyCategories