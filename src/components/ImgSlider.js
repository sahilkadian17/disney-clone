import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
    }

    return (
        <Slider className='Carousel'{...settings}>
            <div className="Slider__Wrap">
                <img src="/images/slider-badging.jpg" alt="" className='Slider__Img'/>
            </div>
            <div className="Wrap">
                <img src="/images/slider-badag.jpg" alt="" className='Slider__Img'/>
            </div>
            <div className="Wrap">
                <img src="/images/slider-scale.jpg" alt="" className='Slider__Img'/>
            </div>
            <div className="Wrap">
                <img src="/images/slider-scales.jpg" alt="" className='Slider__Img'/>
            </div>
        </Slider>
    )
} 

export default ImgSlider