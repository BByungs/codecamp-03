import styled from "@emotion/styled";

interface IProps {
  isEdit?: boolean;
}

export const Wrapper = styled.div`
  width: 1200px;
  height: 117px;
  display: flex;
  padding-left: ${(props: IProps) => (props.isEdit ? "0px" : "63px")};
`;

export const Row = styled.div`
  width: 1136px;
  height: 117px;
  display: flex;
`;
export const ArrowImg = styled.img`
  width: 15px;
  height: 17px;
  margin-right: 25px;
`;
export const CommentBox = styled.div`
  width: 1098px;
  height: 117px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;
export const Input = styled.input`
  width: 1096px;
  height: 64px;
  outline: none;
  padding-left: 20px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border: none;
`;

export const ButtonAndLength = styled.div`
  display: flex;
  width: 1096px;
  height: 52px;
`;

export const Length = styled.div`
  width: 1004px;
  height: 52px;
  padding-left: 20px;
  padding-top: 15px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #bdbdbd;
  border-top: 1px solid #bdbdbd;
`;

interface IProps {
  isEdit?: boolean;
}

export const Button = styled.button`
  width: 92px;
  height: 52px;
  background: ${(props: IProps) => (props.isEdit ? "black" : "#ffd600")};
  color: ${(props: IProps) => (props.isEdit ? "white" : "black")};
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
