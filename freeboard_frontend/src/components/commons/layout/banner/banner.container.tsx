import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: 930px;
  /* background-color: black; */
  margin-bottom: 50px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Banner() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          <div>
            <Img src="/images/banner/one.jpeg" />
          </div>
          <div>
            <Img src="/images/banner/two.jpeg" />
          </div>
          <div>
            <Img src="/images/banner/three.jpeg" />
          </div>
          <div>
            <Img src="/images/banner/four.jpeg" />
          </div>
          <div>
            <Img src="/images/banner/five.jpeg" />
          </div>
          <div>
            <Img src="/images/banner/six.jpeg" />
          </div>
          <div>
            <Img src="/images/banner/seven.png" />
          </div>
          <div>
            <Img src="/images/banner/eight.jpeg" />
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
