import Header from "./Header/Header.container";
import {
  Wrapper,
  Container,
  KakaoMap,
  Buttons,
  GotoMain,
  BuyButton,
  EditButton,
} from "./ProductDetail.styles";
import Underline from "../../../commons/ProductDetail/Underline";
import ProductInfo from "./ProductInfo/ProductInfo.container";
import Underline2 from "../../../commons/ProductDetail/Underline2";
import DetailAsk from "./DetailAsk/DetailAsk.container";
import SellerComment from "./SellerComment/SellerComment.container";

export default function ProductDetailUIPage(props) {
  // console.log(props.data?.fetchUseditem.seller.email);
  // console.log(`=========================================================`);
  // console.log(props.fetchUserLoggedIn?.fetchUserLoggedIn.email);
  const fetchUseditem = props.data?.fetchUseditem.seller.email;
  const fetchUserLoggedIn = props.fetchUserLoggedIn?.fetchUserLoggedIn.email;
  const isTrue = fetchUseditem === fetchUserLoggedIn; // 판매자일때
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

          {fetchUseditem === fetchUserLoggedIn ? (
            <EditButton>수정하기</EditButton>
          ) : (
            <BuyButton>구매하기</BuyButton>
          )}
        </Buttons>
        <Underline2 />
        <DetailAsk />
        {isTrue && <SellerComment />}
      </Wrapper>
    </Container>
  );
}
