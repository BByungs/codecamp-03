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
  Img,
  MySlider,
} from "./ProductInfo.styles";
import Underline from "../../../../commons/ProductDetail/Underline";
import Dompurify from "dompurify";

export default function ProductInfoUI(props) {
  const settings = {
    dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <MySlider {...settings}>
              {props.data?.fetchUseditem.images.map((el) =>
                el ? (
                  <Img src={`https://storage.googleapis.com/${el}`} />
                ) : (
                  <Img src="/noimage.png" />
                )
              )}
            </MySlider>
          </Photo>
        </PhotoWrapper>
      </ProductPhotoWrapper>

      {/* <PhotoList>
        <EachPhoto />
        <EachPhoto />
        <EachPhoto />
        <EachPhoto />
      </PhotoList> */}
      {process.browser && (
        <Contents
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        />
      )}

      <TagsWrapper>
        <Tags>#삼성전자 #갤럭시탭 #갓성비</Tags>
      </TagsWrapper>

      <Underline />
    </Wrapper>
  );
}
