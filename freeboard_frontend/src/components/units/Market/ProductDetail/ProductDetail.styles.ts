import styled from "@emotion/styled";

interface IProps {
  isSeller: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KakaoMap = styled.div`
  width: 792px;
  height: 360px;
  /* background-color: #bdbdbd; */
  margin-top: 80px;
  margin-bottom: 76px;
`;

export const Buttons = styled.div`
  /* width: 382px; */
  width: ${(props: IProps) => (props.isSeller ? "561px" : "382px")};
  height: 52px;
  display: flex;
  justify-content: space-between;
  margin-top: 84px;
  margin-bottom: 80px;
`;

export const GotoMain = styled.button`
  width: 179px;
  height: 52px;
`;
export const BuyButton = styled.button`
  width: 179px;
  height: 52px;
`;
export const EditButton = styled.button`
  width: 179px;
  height: 52px;
`;

export const DeleteButton = styled.button`
  width: 179px;
  height: 52px;
`;
