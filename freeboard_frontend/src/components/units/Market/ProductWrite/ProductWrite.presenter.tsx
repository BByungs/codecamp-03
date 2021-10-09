import ProductWriteInput01 from "../../../commons/ProductWrite/ProductWriteInput01";
import ProductWriteText from "../../../commons/ProductWrite/ProductWriteText";
import AddPicture from "./AddPicture/AddPicture.container";
import MainPhotoSetting from "./MainPhotoSetting";
import Map from "./Map/Map";
import ProductDetail from "./ProductDetail/ProductDetail.container";
import {
  Container,
  Wrapper,
  Header,
  ProductSubmitButton,
  All,
} from "./ProductWrite.styles";

export default function ProductWriteUIPage() {
  return (
    <All>
      <Container>
        <Wrapper>
          <Header>상품 등록하기</Header>
          <ProductWriteInput01
            name="상품명"
            placeholder="상품명을 작성해주세요."
            type="text"
          />
          <ProductWriteInput01
            name="한줄요약"
            placeholder="상품명을 작성해주세요."
            type="text"
          />
          <ProductDetail name="상품설명" />
          <ProductWriteInput01
            name="판매가격"
            placeholder="판매 가격을 입력해주세요."
            type="text"
          />
          <ProductWriteInput01
            name="태그입력"
            placeholder="#태그 #태그 #태그"
            type="text"
          />
          <Map />
          <AddPicture />
          <MainPhotoSetting />
          <ProductSubmitButton>등록하기</ProductSubmitButton>
        </Wrapper>
      </Container>
    </All>
  );
}
