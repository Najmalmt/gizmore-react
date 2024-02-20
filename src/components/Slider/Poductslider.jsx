// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import products from '../../utils/products.json';
// import productImageMap from '../../assets/images/hero-slider-1.jpg';
// const Poductslider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Slider {...settings}>
//       {products.map(product => (
//         <div key={product.id}>
//           <h3>{productImageMap[product.image]}</h3>
//           <p>{product.description}</p>
//           <img src={product.image} alt={productImageMap[product.image]} className='dealimg'/>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default Poductslider;




import React,{useRef, useState} from 'react';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import  productData  from "../../utils/products.json";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const ProductList = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        // customPaging: function (i) {
        //     // Customize the appearance of dots here
        //     return <div style={{ width: "10px", height: "10px", background: "grey", borderRadius: "50%" }} />;
        // }
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
        customPaging: (i) => (
            <div style={{ width: "10px", height: "10px", background: i === currentSlide ? "black" : "grey", borderRadius: "50%", marginTop: "20px" }} />
        )
    };
    
    const SliderRef = useRef();

    return (
        <div className='py-5 px-16'>
            <h2 className='mb-2 text-4xl font-medium text-center'>Trending Deals
                <div className="border-b-4 border-orange-400 w-10 mx-auto mt-3 mb-4"></div>
            </h2>
                <Slider ref={SliderRef} {...settings}>
                    {productData.map((product, index) => (
                        <div key={product.id} className=''>
                            <div className='rounded-lg bg-gray-100 mr-3 first:ml-0'>
                                <div className=' relative'>
                                    <div className=' absolute bottom-50'>
                                        <h4 className=' bg-orange-500 text-white text-xs font-semibold py-1 px-2'>{product.offers}</h4>
                                    </div>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className=' py-7 px-7'>
                                    <div className='flex justify-between'>
                                            <div className="flex justify-center items-center">
                                                <h4>5.0</h4>
                                                <AiFillStar/>
                                            </div>
                                        <div className="flex justify-between">
                                            {product.colors && product.colors.map((color,index) => (
                                                <div
                                                    key={index}
                                                    className={`w-4 h-4 rounded-full ml-1 cursor-pointer ${index === 0 ? 'relative z-10' : 'relative'}`}
                                                    style={{ backgroundColor: color }}
                                                    title={color}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-2 items-center'>
                                        <div className=''>
                                            <h4 className=' text-sm font-semibold'>{product.name}</h4>
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
                </Slider>
            <div className=' text-center mt-10 relative bottom-72 flex justify-between'>
                <button className='button bg-gray-200 px-1 py-1 rounded-lg' onClick={()=>SliderRef.current.slickPrev()} >
                    <IoIosArrowBack className=' text-3xl'/>
                </button>
                <button className='button bg-gray-200 px-1 py-1 rounded-lg' onClick={()=>SliderRef.current.slickNext()}>
                    <IoIosArrowForward className=' text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default ProductList;

{/* <div className=''>
    <div className=''>
        <div className=''>
            <h4>{product.name}</h4>
            <p className='mr-1'>{product.newPrice}</p>
            <del className=' text-sm text-gray-400 mt-0.5'>{product.prevPrice}</del> 
        </div>
        <div className=''>
            <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Large</button>
        </div>
    </div>
</div>    */}