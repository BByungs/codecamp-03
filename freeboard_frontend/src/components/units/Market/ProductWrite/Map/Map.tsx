import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import styled from "@emotion/styled";
import AddressSmallInput from "../../../../commons/ProductWrite/AddressSmallInput";
import RoomIcon from "@mui/icons-material/Room";
import React from "react";
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
export default function Map(props) {
  return (
    <Wrapper>
      <Left>
        <ProductWriteText name="거래위치" />
        <KakaoMap></KakaoMap>
      </Left>
      <Right>
        <GPSInput>
          <ProductWriteText name="GPS" />
          <GPS>
            <AddressSmallInput
              placeholder="위도(LAT)"
              type="text"
              register={props.useditemAddress.lat}
            />
            <Pin />
            <AddressSmallInput
              placeholder="경도(LNG)"
              register={props.useditemAddress.lng}
            />
          </GPS>
        </GPSInput>
        <Address>
          <ProductWriteText name="주소" />
          <AddressInput type="text" register={props.useditemAddress.address} />
          <ErrorMessage>{props.MapErrorMsg.address}</ErrorMessage>
          <AddressInput
            type="text"
            register={props.useditemAddress.addressDetail}
          />
          <ErrorMessage>{props.MapErrorMsg.addressDetail}</ErrorMessage>
        </Address>
      </Right>
    </Wrapper>
  );
}
