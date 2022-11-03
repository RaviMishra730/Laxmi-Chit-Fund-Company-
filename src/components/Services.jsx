import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../assets/RaviMishra.jpg";
import img1 from "../assets/rajubhai.jpeg";
const Services = () => {
    return <div className='services'>
        <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} interval={2000} showThumbs= {false}>
            <div>
                <img src={img1} alt="Loading" />
                <p className='legend'>Raju Bhai</p>
            </div>
            <div>
                <img src={img2} alt="Loading" />
                <p className='legend'>Creator of this Website</p>
            </div>

        </Carousel>
        </div>
}

export default Services;