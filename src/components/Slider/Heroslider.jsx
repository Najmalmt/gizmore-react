// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import HeroSlider1 from '../../assets/images/hero-slider-1.jpg';
// import HeroSlider2 from '../../assets/images/hero-slider-2.jpg';
// import HeroSlider3 from '../../assets/images/hero-slider-3.jpg';
// import HeroSlider4 from '../../assets/images/hero-slider-4.jpg';
// import HeroSlider5 from '../../assets/images/hero-slider-5.jpg';

// function Heroslider() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         speed: 500,
//         slidesToScroll: 1,
//         autoplaySpeed: 1000,
//         arrows: false,
//         // customPaging: function (i) {
//         //     // Customize the appearance of dots here
//         //     return <div style={{ width: "5px", height: "5px", margin: "0 5px", background: "white", borderRadius: "50%" }} />;
//         // }
//     };
//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
//                 <div className='w-full'>
//                     <div>
//                         <img src={HeroSlider1} alt='Slider Img 1'  />
//                     </div>
//                     <div>
//                         <img src={HeroSlider2} alt='Slider Img 2'  />
//                     </div>
//                     <div>
//                         <img src={HeroSlider3} alt='Slider Img 3'  />
//                     </div>
//                     <div>
//                         <img src={HeroSlider4} alt='Slider Img 4'  />
//                     </div>
//                     <div>
//                         <img src={HeroSlider5} alt='Slider Img 5'  />
//                      </div>
//                 </div>
//              </Slider>
//          </div>
//      );
// }

// export default Heroslider;

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSlider1 from '../../assets/images/hero-slider-1.jpg';
import HeroSlider2 from '../../assets/images/hero-slider-2.jpg';
import HeroSlider3 from '../../assets/images/hero-slider-3.jpg';
import HeroSlider4 from '../../assets/images/hero-slider-4.jpg';
import HeroSlider5 from '../../assets/images/hero-slider-5.jpg';

function Heroslider() {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return (
        <div className="slider-container relative w-full" style={{ width: '98.7vw' }}>
            <Slider {...settings}>
                <div>
                    <img src={HeroSlider1} alt='Slider Img 1' style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div>
                    <img src={HeroSlider2} alt='Slider Img 2' style={{ width: '100vw', height: 'auto' }} />
                </div>
                <div>
                    <img src={HeroSlider3} alt='Slider Img 3' style={{ width: '100vw', height: 'auto' }} />
                </div>
                <div>
                    <img src={HeroSlider4} alt='Slider Img 4' style={{ maxWidth: '100vw', height: 'auto' }} />
                </div>
                <div>
                    <img src={HeroSlider5} alt='Slider Img 5' style={{ width: '100vw', height: 'auto' }} />
                </div>
            </Slider>
        </div>
    );
}

export default Heroslider;
