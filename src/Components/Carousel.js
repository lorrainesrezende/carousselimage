import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 20 }} />
        </div>
        <div className="center">
          <h3>{images[currImg].p}</h3>
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle1}<strong>{images[currImg].strong}</strong>{images[currImg].subtitle2}</p>
          <p>{images[currImg].button}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
