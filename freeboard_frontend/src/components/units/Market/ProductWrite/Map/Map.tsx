import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import styled from "@emotion/styled";
import AddressSmallInput from "../../../../commons/ProductWrite/AddressSmallInput";
import RoomIcon from "@mui/icons-material/Room";
import React, { useEffect } from "react";
import AddressInput from "../../../../commons/ProductWrite/AddressInput";

const KakaoMap = styled.div`
  width: 384px;
  height: 320px;
  background-color: #bdbdbd;
`;

const Left = styled.div`
  width: 384px;
  height: 370px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 996px;
  /* height: 292px; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Right = styled.div`
  /* height: 292px; */
  width: 588;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GPS = styled.div`
  width: 272px;
  height: 52px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Pin = styled(RoomIcon)`
  color: #ffd600;
  font-size: 25px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const GPSInput = styled.div`
  display: flex;
  flex-direction: column;
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

declare const window: typeof globalThis & {
  kakao: any;
};
export default function Map(props: any) {
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
            props.data?.fetchUseditem.useditemAddress.lat || 37.485053527846674,
            props.data?.fetchUseditem.useditemAddress.lng || 126.89533419993485
            // props.data?.fetchUseditem.useditemAddress.lat,
            // props.data?.fetchUseditem.useditemAddress.lng
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);
        interface IMouseEvent {
          latLng: any;
        }
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: IMouseEvent) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);

            console.log(
              `클릭한 위치의 위도는 ${latlng.getLat()}이고, 경도는 ${latlng.getLng()}입니다.`
            );
            props.setValue("lat", latlng.getLat());
            props.setValue("lng", latlng.getLng());
          }
        );
      });
    };
  }, [
    props.data?.fetchUseditem.useditemAddress.lat,
    props.data?.fetchUseditem.useditemAddress.lng,
  ]);
  return (
    <Wrapper>
      <Left>
        <ProductWriteText name="거래위치" />
        <KakaoMap id="map"></KakaoMap>
      </Left>
      <Right>
        <GPSInput>
          <ProductWriteText name="GPS" />
          <GPS>
            <AddressSmallInput
              placeholder="위도(LAT)"
              type="text"
              register={props.register("lat")}
              defaultValue={props.data?.fetchUseditem.useditemAddress.lat}
            />
            <Pin />
            <AddressSmallInput
              placeholder="경도(LNG)"
              type="text"
              register={props.register("lng")}
              defaultValue={props.data?.fetchUseditem.useditemAddress.lng}
            />
          </GPS>
        </GPSInput>
        <Address>
          <ProductWriteText name="주소" />
          <AddressInput
            type="text"
            defaultValue={props.data?.fetchUseditem.useditemAddress.address}
            register={props.register("address")}
          />
          <ErrorMessage>{props.MapErrorMsg.address}</ErrorMessage>
          <AddressInput
            type="text"
            defaultValue={
              props.data?.fetchUseditem.useditemAddress.addressDetail
            }
            register={props.register("addressDetail")}
          />
          <ErrorMessage>{props.MapErrorMsg.addressDetail}</ErrorMessage>
        </Address>
      </Right>
    </Wrapper>
  );
}
