import {
  Wrapper,
  ProductInfo,
  Info,
  Remarks,
  Name,
  Price,
  Heart,
  HeartIcon,
  HeartCount,
  ProductPhotoWrapper,
  PhotoWrapper,
  Photo,
  PhotoList,
  EachPhoto,
  Contents,
  Tags,
  TagsWrapper,
} from "./ProductInfo.styles";
import Underline from "../../../../commons/ProductDetail/Underline";
import Dompurify from "dompurify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductInfoUI(props) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Wrapper>
      <ProductInfo>
        <Info>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem.name}</Name>
          <Price>{`${props.data?.fetchUseditem.price.toLocaleString()}원`}</Price>
        </Info>
        <Heart>
          <HeartIcon onClick={props.onClickHeart} />
          <HeartCount>{props.data?.fetchUseditem.pickedCount}</HeartCount>
        </Heart>
      </ProductInfo>

      <ProductPhotoWrapper>
        <PhotoWrapper>
          <Photo>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images.map((el) => (
                <img src={el} />
              ))}
            </Slider>
          </Photo>
        </PhotoWrapper>
        <PhotoList>
          <EachPhoto />
          <EachPhoto />
          <EachPhoto />
          <EachPhoto />
        </PhotoList>
      </ProductPhotoWrapper>

      <Contents
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
        }}
      />

      <TagsWrapper>
        <Tags>#삼성전자 #갤럭시탭 #갓성비</Tags>
      </TagsWrapper>

      <Underline />
    </Wrapper>
  );
}
