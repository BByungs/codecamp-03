import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {
  isMyUsedItem: boolean;
  isMyFavorite: boolean;
}
export const Wrapper = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
`;

export const HeaderLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 980px;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 980px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const HeaderText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  height: 27px;
`;

export const Col = styled.div`
  height: 64px;
  /* width: 980px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const UnderLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 980px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 980px;
  padding-top: 5px;
  margin-bottom: 20px;
  height: 24px;
`;

export const DateText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #4f4f4f;
  height: 24px;
  text-align: center;
`;

export const ChargeText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #ffd600;
  height: 24px;
  text-align: center;
`;

export const BuyText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #0031e0;
  height: 25;
  text-align: center;
`;

export const Balance = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #4f4f4f;
  height: 24px;
`;

export const ImpText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #4f4f4f;
  height: 24px;
`;
