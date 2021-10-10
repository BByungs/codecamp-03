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

export default function ProductInfoUI(props) {
  return (
    <Wrapper>
      <ProductInfo>
        <Info>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem.name}</Name>
          <Price>{props.data?.fetchUseditem.price}</Price>
        </Info>
        <Heart>
          <HeartIcon onClick={props.onClickHeart} />
          <HeartCount>{props.data?.fetchUseditem.pickedCount}</HeartCount>
        </Heart>
      </ProductInfo>

      <ProductPhotoWrapper>
        <PhotoWrapper>
          <Photo></Photo>
        </PhotoWrapper>
        <PhotoList>
          <EachPhoto />
          <EachPhoto />
          <EachPhoto />
          <EachPhoto />
        </PhotoList>
      </ProductPhotoWrapper>

      <Contents>{props.data?.fetchUseditem.contents}</Contents>

      <TagsWrapper>
        <Tags>#삼성전자 #갤럭시탭 #갓성비</Tags>
      </TagsWrapper>

      <Underline />
    </Wrapper>
  );
}
