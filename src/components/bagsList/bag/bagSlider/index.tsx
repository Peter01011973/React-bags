import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './bagSlider.css';

export type ArrowFunc = (className: any, style: any, onClick: any) => JSX.Element;

interface Props {
    image1: {photoTI: string};
    image2: {photoTI: string};
}

const BagSlider: React.FC<Props> = ({image1, image2}) => {

    const settings = {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        className: 'bagCard__slider',
    }

    return (
        <Slider {...settings}>
            <div className='bagCard__slider'>
                <img className = 'image' src = {process.env.PUBLIC_URL + image1.photoTI} alt = 'a bag looks awesome'/>
            </div>
            <div className='bagCard__slider'>
                <img className = 'image'  src = {process.env.PUBLIC_URL + image2.photoTI} alt = 'a bag looks awesome'/>
            </div>
        </Slider>
        //     <img className = 'bagCard__images__image' src = {process.env.PUBLIC_URL + images.photoTI} alt = 'a bag looks awesome' /> 
    )
}

export default BagSlider
