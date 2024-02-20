// import React from 'react';
// import thumbnailSrc from '../assets/images/ikon_3luxe.jpg'; // Importing the constants from paths.js
// import videoSrc from '../assets/images/ikon-luxe.mp4';
// function ExploreBestseller() {
//     return (<>
//         <div className='flex justify-between py-5 px-12'>
//             <div className="card-container relative w-64 h-48 overflow-hidden shadow-lg rounded-lg">
//                 <div className="card-thumbnail">
//                     <img src={thumbnailSrc} alt="Video Thumbnail" className="w-full h-full object-cover" />
//                     <video className="card-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" src={videoSrc} muted loop autoPlay />
//                 </div>
//             </div>
//         </div>
//     </>);
// }
// export default ExploreBestseller;

// import React from 'react'
// import { best } from '../utils/bestseller'
// function ExploreBestseller() {
//   return (
//     <div>
//         {best.map(item => (
//         <div key={item.id}>
//           <img src={item.thumbnailSrc} alt="Thumbnail" />
//           <video src={item.videoSrc} controls>
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ExploreBestseller

import React, { useState } from 'react';
import { best } from '../utils/bestseller';

function ExploreBestseller() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
        <div className='py-9 px-16'>
            <h2 className="text-4xl font-medium mb-4 text-center border-b-3 ">Explore Bestseller</h2>
            <div className="flex justify-center gap-4">
                {best.map(item => (
                    <div key={item.id}
                    className="relative w-full min-h-64 overflow-hidden shadow-lg rounded-lg block"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}>
                    <img src={item.thumbnailSrc} alt="Thumbnail" className="w-full h-full object-cover" />
                    {hoveredId === item.id && (
                        <video src={item.videoSrc} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                        Your browser does not support the video tag.
                        </video>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreBestseller;


// import React from 'react'
// import bestseller from '../utils/bestseller.json'

// function ExploreBestseller() {
//     return (
//             <div className='flex justify-between py-5 px-12'>
//             {bestseller.map((data) => (
//             <div className="card-container relative w-64 h-48 overflow-hidden shadow-lg rounded-lg" key={data.id}>
//             <div className="card-thumbnail">
//                 <img src={data.thumbnailSrc} alt="Video Thumbnail" className="w-full h-full object-cover" />
//                 <video className="card-video absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" src={data.videoSrc} muted loop autoPlay />
//             </div>
//             </div>
//         ))}
//         </div>
//     )
// }

// export default ExploreBestseller

