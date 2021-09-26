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
const ImgThree = styled.img`
  width: 100%;
  height: 100%;
`;

// export const Caresel = styled(Slider)`
//   .slick-list {
//     width: 1915px;
//     margin: 0 auto;
//   }
//   .slick-slide div {
//     /* cursor: pointer; */
//   }
//   .slick-dots {
//     margin-top: 200px;
//   }
//   .slick-track {
//     /* overflow-x: hidden; */
//   }
// `;

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
            <ImgThree src="/images/banner/one.jpeg" />
          </div>
          <div>
            <ImgThree src="/images/banner/two.jpeg" />
          </div>
          <div>
            <ImgThree src="/images/banner/three.jpeg" />
          </div>
          <div>
            <ImgThree src="/images/banner/four.jpeg" />
          </div>
          <div>
            <ImgThree src="/images/banner/five.jpeg" />
          </div>
          <div>
            <ImgThree src="/images/banner/six.jpeg" />
          </div>
          <div>
            <ImgThree src="/images/banner/seven.png" />
          </div>
          <div>
            <ImgThree src="/images/banner/eight.jpeg" />
          </div>
        </Slider>
      </Wrapper>
    </>
  );
}
