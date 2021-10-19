import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

// 93
export const Wrapper = styled.div`
  height: 93px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Body = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  align-items: center;
`;

export const Select = styled.div`
  width: 206px;
  height: 27px;
  margin-right: 324px;
  display: flex;
`;

export const OnSaleText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
export const SoldOutText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400; // 조건부 렌더링 줘서 선택되면 500으로 바꿔야함
  color: #4f4f4f;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
export const SelectLine = styled.div`
  border-bottom: 2px solid #ffd600;
  width: 83px;
`;
export const OnSale = styled.div`
  width: 83px;
  height: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`;
export const SoldOut = styled.div`
  width: 83px;
  height: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductSearch = styled.div`
  width: 282px;
  height: 52px;
  background-color: #f2f2f2;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 24px;
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
export const Range = styled(RangePicker)`
  width: 282px;
  height: 52px;
  color: #bdbdbd;
  padding: 14px 16px 14px 16px;
  font-size: 16px;
  font-family: Noto Sans CJK KR;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;
export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  background-color: black;
  color: white;
  padding: 14px 24px 14px 24px;
  margin-left: 24px;
`;

export const SearchBarLine = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;
