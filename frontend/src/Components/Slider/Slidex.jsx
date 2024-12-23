import React from 'react'
import Slider from "react-slick";
import Slider1Img from "../../Assests/Images/img1.webp";
import Slider2Img from "../../Assests/Images/img2.webp";
import Slider3Img from "../../Assests/Images/img3.webp";
import Slider4Img from "../../Assests/Images/img4.webp";
import Slider5Img from "../../Assests/Images/img5.webp";

function Slidex() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Slider1Img} />
                </div>
                <div>
                    <img src={Slider2Img} />

                </div>
                <div>
                    <img src={Slider3Img} />

                </div>
                <div>
                    <img src={Slider4Img} />

                </div>
                <div>
                    <img src={Slider5Img} />

                </div>

            </Slider>
        </div>
    )
}

export default Slidex