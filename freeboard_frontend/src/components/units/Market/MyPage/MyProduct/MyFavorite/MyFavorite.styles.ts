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
// 날짜 text
export const DateText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #4f4f4f;
  height: 24px;
  text-align: center;
`;

// text: 충전 , 거래및충전내역 금액 (yellow)
export const ChargeText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #ffd600;
  height: 24px;
  text-align: center;
`;

// text: 구매 , 거래및충전내역 금액 (blue)
export const BuyText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: #0031e0;
  height: 25;
  text-align: center;
`;

// 잔액 text
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

// ! #############

export const Header = styled.div`
  display: flex;
  width: 980px;
  height: 52px;
  flex-direction: row;
`;

export const Select = styled.div`
  width: 129px;
  display: flex;
  align-items: flex-end;
`;
export const SelectLine = styled.div`
  height: 16px;
  border-right: 1px solid #bdbdbd;
  margin-bottom: 5px;
  margin-right: 12px;
  margin-left: 12px;
`;

export const SelectText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  color: ${(props: IProps) => (props.isMyFavorite ? "black" : "#828282")};
  /* color: #828282 */
  height: 24px;
`;

export const Search = styled(SearchIcon)`
  font-size: 17.49px;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;

export const ProductSearch = styled.div`
  width: 368px;
  height: 52px;
  background-color: #f2f2f2;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
  margin-left: 381px;
`;

export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  background-color: black;
  color: white;
`;

export const Line = styled.div`
  border: 1px solid black;
  width: 980px;
  margin-top: 16px;
  margin-bottom: 12px;
`;
