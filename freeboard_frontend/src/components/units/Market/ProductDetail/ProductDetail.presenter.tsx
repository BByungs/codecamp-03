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
import NormalComment from "./NormalComment/NormalComment.container";
import { useEffect } from "react";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetailUIPage(props) {
  const router = useRouter();
  const fetchUseditem = props.data?.fetchUseditem.seller.email;
  const fetchUserLoggedIn = props.fetchUserLoggedIn?.fetchUserLoggedIn.email;
  const isSeller = fetchUseditem === fetchUserLoggedIn; // 판매자일때

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=618745b280cea9ed79e1e61c9c19a187";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress.lat,
            props.data?.fetchUseditem.useditemAddress.lng
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);
      });
    };
  }); // [] 의존성 배열을 쓰면 안 받아와짐

  return (
    <Container>
      <Wrapper>
        <Header data={props.data} />
        <Underline />
        <ProductInfo data={props.data} />
        <KakaoMap id="map" />
        <Underline />
        <Buttons>
          <GotoMain onClick={props.onClickMain}>목록으로</GotoMain>

          {isSeller ? (
            <EditButton>수정하기</EditButton>
          ) : (
            <BuyButton>구매하기</BuyButton>
          )}
        </Buttons>
        <Underline2 />
        <DetailAsk />
        {isSeller && <SellerComment />}
        {!isSeller && <NormalComment fetchUserLoggedIn={fetchUserLoggedIn} />}
      </Wrapper>
    </Container>
  );
}
