import styled from "@emotion/styled";
import LinkIcon from "@mui/icons-material/Link";
import RoomIcon from "@mui/icons-material/Room";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 792px;
  margin-bottom: 22px;
`;

export const Info = styled.div`
  display: flex;
  width: 151px;
  height: 40px;
  justify-content: space-between;
`;
export const SellerPhoto = styled.img`
  width: 40px;
  height: 40px;
`;
export const SellerAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Seller = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  width: 95px;
  height: 24px;
`;

export const Date = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  width: 95px;
  height: 18px;
  color: #828282;
`;

export const Icons = styled.div`
  display: flex;
  width: 49px;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(LinkIcon)`
  font-size: 22px;
  color: #ffd600;
`;

export const Pin = styled(RoomIcon)`
  font-size: 20px;
  color: #ffd600;
`;
