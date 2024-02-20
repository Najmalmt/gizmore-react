import React,{useRef, useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSlider1 from '../../assets/images/hero-slider-1.jpg';
import Footerslider1 from '../../assets/images/footerslider/footerslider1.jpg'
import Footerslider2 from '../../assets/images/footerslider/footerslider.jpg'
import Footerslider3 from '../../assets/images/footerslider/footerslider2.jpg'
import Footerslider4 from '../../assets/images/footerslider/footerslider3.jpg'
import Footerslider5 from '../../assets/images/footerslider/footerslider4.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
function Footerslider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000, 
        slidesToShow: 5,
        swipeToSlide: true,
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
        customPaging: (i) => (
            <div style={{ width: "10px", height: "10px", background: i === currentSlide ? "black" : "grey", borderRadius: "50%", marginTop: "20px" }} />
        )
    };

    const SliderRef = useRef();

    return ( 
          <div className="py-7 px-16">
                <div className=''>
                    <Slider ref={SliderRef} {...settings}>
                            <div className='px-4'>
                                <img src={Footerslider1} alt='Slider Img 1' style={{ maxWidth: '35%', height: 'auto' }} />
                            </div>
                            <div className='px-4 p-2'>
                                <img src={Footerslider2} alt='Slider Img 1' style={{ maxWidth: '45%', height: 'auto' }} />
                            </div>
                            <div className='px-4 p-3'>
                                <img src={Footerslider3} alt='Slider Img 1' style={{ maxWidth: '40%', height: 'auto' }} />
                            </div>
                            <div className='px-4 py-7'>
                                <img src={Footerslider4} alt='Slider Img 1' style={{ maxWidth: '55%', height: 'auto' }} />
                            </div>
                            <div className='px-4 py-5'>
                                <img src={Footerslider5} alt='Slider Img 1' style={{ maxWidth: '40%', height: 'auto' }} />
                            </div>
                    </Slider>
                </div>
                <div className=' bottom-16 flex justify-between relative'>
                    <button className='button bg-slate-100 px-1 py-1 rounded-lg' onClick={()=>SliderRef.current.slickPrev()} >
                        <IoIosArrowBack className=' text-2xl'/>
                    </button>
                    <button className='button bg-orange-500 px-1 py-1 rounded-lg' onClick={()=>SliderRef.current.slickNext()}>
                        <IoIosArrowForward className=' text-2xl text-neutral-100' />
                    </button>
                </div>
        </div>
    )
}

export default Footerslider

// import React, { useRef, useState } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import bestgizmore from '../../utils/footerslider.json'; // Import your JSON file
// import HeroSlider1 from '../../assets/images/hero-slider-1.jpg';

// function Footerslider() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const SliderRef = useRef();

//     const settings = {
//         infinite: true,
//         slidesToShow: 5,
//         swipeToSlide: true,
//         beforeChange: (current, next) => setCurrentSlide(next),
//         customPaging: (i) => (
//             <div style={{ width: "10px", height: "10px", background: i === currentSlide ? "black" : "grey", borderRadius: "50%", marginTop: "20px" }} />
//         )
//     };

//     return (
//         <div className="px-14">
//             <div className=' align-baseline'>
//                 <Slider ref={SliderRef} {...settings}>
//                     {bestgizmore.map((items, index) => (
//                         <div key={items.id} className=' px-8 py-8 flex align-middle'>
//                             <img src={items.image} alt={`Slider Img ${index + 1}`} className='w-20 h-auto object-cover' />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             <div className='bottom-24 flex justify-between relative'>
//                 <button className='button bg-white px-1 py-1 rounded-lg' onClick={() => SliderRef.current.slickPrev()} >
//                     <IoIosArrowBack className='text-3xl' />
//                 </button>
//                 <button className='button bg-slate-200 px-1 py-1 rounded-lg' onClick={() => SliderRef.current.slickNext()}>
//                     <IoIosArrowForward className='text-3xl' />
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Footerslider;
