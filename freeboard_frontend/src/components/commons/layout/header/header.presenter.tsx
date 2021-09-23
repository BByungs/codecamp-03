import React from "react";
import {
  Wrapper,
  Header,
  Header_left,
  Header_right,
  SliderItem,
} from "./header.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeaderUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/header/poster1.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/header/poster1.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/header/poster1.jpeg" />
        </div> 
      </Slider>
    </Wrapper>
  );
}
