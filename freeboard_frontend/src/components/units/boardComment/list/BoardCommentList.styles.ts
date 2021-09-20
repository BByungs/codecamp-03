import styled from "@emotion/styled";
import { Rate } from "antd";

export const Star = styled(Rate)``;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  /* margin: 100px; */
`;

export const CommentList_Comment_Container_Top = styled.div`
  display: flex;
  height: 100px;
`;

export const CommentList_ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const CommentList_Comment_Container_Top_Right = styled.div`
  display: column;
`;

export const CommentList_Profile_StarScope = styled.div`
  display: flex;
  width: 1200px;
  height: 27px;
  margin-bottom: 11px;
  /* text-align: center; */
`;

export const CommentList_Writer = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  width: 70px;
  height: 24px;
  margin-right: 18px;
`;

export const CommentPencil = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  cursor: pointer;
  margin-left: 860px;
`;

export const CommentX = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CommentList_Comment_Read = styled.div`
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 16px;
  height: 24px;
  width: 1200px;
  color: #4f4f4f;
  margin-bottom: 16px;
`;

export const CommentList_Write_Date = styled.div`
  width: 75px;
  height: 18px;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 12px;
  color: #bdbdbd;
  margin-bottom: 20px;
`;

export const Underline = styled.div`
  width: 1198px;
  border-bottom: 1px solid #f2f2f2;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
