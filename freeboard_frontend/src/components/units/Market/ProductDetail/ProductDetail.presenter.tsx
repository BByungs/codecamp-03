import Header from "./Header/Header.container";
import {
  Wrapper,
  Container,
  KakaoMap,
  Buttons,
  GotoMain,
  Buy,
} from "./ProductDetail.styles";
import Underline from "../../../commons/ProductDetail/Underline";
import ProductInfo from "./ProductInfo/ProductInfo.container";

export default function ProductDetailUIPage(props) {
  console.log(props.data);
  return (
    <Container>
      <Wrapper>
        <Header data={props.data} />
        <Underline />
        <ProductInfo data={props.data} />
        <KakaoMap />
        <Underline />
        <Buttons>
          <GotoMain onClick={props.onClickMain}>목록으로</GotoMain>
          <Buy>구매하기</Buy>
        </Buttons>
      </Wrapper>
    </Container>
  );
}
