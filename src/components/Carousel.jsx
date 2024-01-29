import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prev = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else {
        setCurrentImageIndex(images.length - 1);
      }
    };
  
    const next = () => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    };
  
    return (
      <>
        <div className="main-container">
          <div className="button-container">
            <div className="left-btn" onClick={prev}>
              <ArrowBackIosIcon style={{ fill: 'white' }} />
            </div>
            <div className="right-btn" onClick={next}>
              <ArrowForwardIosIcon style={{ fill: "white" }} />
            </div>
          </div>
          <div className="image-span-container">
            <span className="text title">{images[currentImageIndex].title}</span>
            <img src={images[currentImageIndex].img} alt="" />
            <span className="text subtitle">{images[currentImageIndex].subtitle}</span>
          </div>
        </div>
      </>
    );

}

export default Carousel;
