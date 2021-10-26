import Header from "./Header/Header.container";
import {
  Wrapper,
  Container,
  KakaoMap,
  Buttons,
  GotoMain,
  BuyButton,
  EditButton,
  DeleteButton,
} from "./ProductDetail.styles";
import Underline from "../../../commons/ProductDetail/Underline";
import ProductInfo from "./ProductInfo/ProductInfo.container";
import Underline2 from "../../../commons/ProductDetail/Underline2";
import DetailAsk from "./DetailAsk/DetailAsk.container";
import SellerComment from "./SellerComment/SellerComment.container";
import { useRouter } from "next/router";

export default function ProductDetailUIPage(props) {
  const fetchUseditem = props.data?.fetchUseditem.seller.email;
  const fetchUserLoggedIn = props.fetchUserLoggedIn?.fetchUserLoggedIn.email;
  const isSeller = fetchUseditem === fetchUserLoggedIn; // 판매자일때

  return (
    <Container>
      <Wrapper>
        <Header data={props.data} />
        <Underline />
        <ProductInfo data={props.data} />
        <KakaoMap id="map" />
        <Underline />
        <Buttons isSeller={isSeller}>
          <GotoMain onClick={props.onClickMain}>목록으로</GotoMain>

          {isSeller ? (
            <>
              <EditButton onClick={props.onClickMoveToEdit}>
                수정하기
              </EditButton>
              <DeleteButton onClick={props.onClickProductDelete}>
                삭제하기
              </DeleteButton>
            </>
          ) : (
            <BuyButton onClick={props.onClickBuy}>구매하기</BuyButton>
          )}
        </Buttons>
        <Underline2 />
        <DetailAsk />
        {/* {isSeller && <SellerComment />} */}
        <SellerComment></SellerComment>
        {/* {!isSeller && <NormalComment fetchUserLoggedIn={fetchUserLoggedIn} />} */}
      </Wrapper>
    </Container>
  );
}
