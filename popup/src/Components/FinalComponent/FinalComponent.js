import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css"
import MagicSliderDots from 'react-magic-slider-dots';
import FirstPopup from '../FirstPopup';
import FourthPopup from '../FourthPopup/FourtPopup';
import SecondPopup from '../SecondPopup/SecondPopup';
import ThirdPopup from '../ThirdPopup/ThirdPopup';
import './FinalComponent.css'

const FinalComponent = () => {

   
        const settings = {
          dots: true,
          arrows: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => {
            return <MagicSliderDots  dots={dots} numDotsToShow={4} dotWidth={100} />;
          }
        }
    return (
        <div className='finalcomponent'>
        <Slider className='slidercontainer' {...settings}>
        <div>
            <FirstPopup/>     
        </div>
        <div>
            <SecondPopup/>
        </div>
        <div>
            <ThirdPopup/>
        </div>
        <div>
            <FourthPopup/>
        </div>
        </Slider>
        </div>
    )
}

export default FinalComponent
