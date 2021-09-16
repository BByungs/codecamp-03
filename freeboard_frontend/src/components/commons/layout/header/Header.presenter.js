import { SliderItem, HeaderWrapper } from "./Header.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HeaderWrapper>
      <Slider {...settings}>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
        <div>
          <SliderItem />
        </div>
      </Slider>
    </HeaderWrapper>
  );
}
