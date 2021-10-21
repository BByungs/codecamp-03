import styled from "@emotion/styled";

interface IProps {
  isAll: boolean;
  isChargeList: boolean;
  isBuyList: boolean;
  isSalesHistory: boolean;
}

export const Wrapper = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  margin-bottom: 34px;
`;

export const Text = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;

  font-weight: ${(props: IProps) =>
    props.isAll || props.isChargeList || props.isBuyList || props.isSalesHistory
      ? "700"
      : "500"};
  /* color: #bdbdbd; */
  height: 24px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SelectLine = styled.div`
  height: 16px;
  border-right: 1px solid #bdbdbd;
  margin-right: 12px;
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
