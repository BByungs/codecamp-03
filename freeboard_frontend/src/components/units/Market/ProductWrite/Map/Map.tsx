import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import styled from "@emotion/styled";
import AddressSmallInput from "../../../../commons/ProductWrite/AddressSmallInput";
import RoomIcon from "@mui/icons-material/Room";
import React from "react";
import AddressInput from "../../../../commons/ProductWrite/AddressInput";

const KakaoMap = styled.div`
  width: 384px;
  height: 252px;
  background-color: #bdbdbd;
`;

const Left = styled.div`
  width: 384px;
  height: 292px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 996px;
  height: 292px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Right = styled.div`
  height: 292px;
  width: 588;
  display: flex;
  flex-direction: column;
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
export default function Map() {
  return (
    <Wrapper>
      <Left>
        <ProductWriteText name="거래위치" />
        <KakaoMap></KakaoMap>
      </Left>
      <Right>
        <ProductWriteText name="GPS" />
        <GPS>
          <AddressSmallInput placeholder="위도(LAT)" />
          <Pin />
          <AddressSmallInput placeholder="경도(LNG)" />
        </GPS>
        <ProductWriteText name="주소" />
        <AddressInput />
        <AddressInput />
      </Right>
    </Wrapper>
  );
}
