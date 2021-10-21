import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
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

export const HeaderLine = styled.div`
  border-bottom: 1px solid black;
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
