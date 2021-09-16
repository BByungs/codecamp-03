import styled from "@emotion/styled";
import { Rate } from "antd";
import { EnvironmentOutlined, CaretDownOutlined } from "@ant-design/icons";

export const LocationIcon = styled.img``;
export const Smalltriangle = styled(CaretDownOutlined)`
  font-size: 20px;
  color: #aeaeae;
  transform: rotate(1.634turn);
  margin-left: 379.6px;
  border: none;
`;

export const MapIcon = styled(EnvironmentOutlined)`
  color: #ffd600;
  font-size: 20px;
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

export const MyRate = styled(Rate)``;
export const Wrapper_Bottom = styled.div`
  width: 100%;
  /* height: 1900px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-right: 360px;
  padding-left: 360px;
`;

export const Container = styled.div`
  width: 1200px;
  height: 1602px;
  display: flex;
  padding: 80px 102px;
  flex-direction: column;
  /* background-color: skyblue; */
  align-items: center;
  margin-bottom: 80px;
  border: 1px solid black;
`;

export const Container_Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 996px;
  height: 80px;
  justify-content: space-between;
  margin-bottom: 81px;
`;
export const Container_Top_WriterInfo_Icon = styled.div`
  display: flex;
  width: 984.66px;
  height: 60px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Container_Top_WriterInfo = styled.div`
  width: 189.34px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const Container_Top_WriterInfo_ProfilePhoto = styled.img`
  width: 46.67px;
  height: 46.67px;
`;

export const Container_Top_WriterInfo_Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 126px;
  height: 60px;
`;

export const ProfileName = styled.div`
  width: 250px;
  height: 36px;
  font-weight: 500;
  font-size: 24px;
  color: black;
`;

export const ProfileWriteDay = styled.div`
  width: 160px;
  height: 24px;
  color: #828282;
  font-size: 16px;
  font-weight: 400;
`;

export const Container_Top_WriterIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 74.66px;
  height: 26.67px;
  align-items: center;
`;

export const Underbar = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 996px;
`;

export const MagnetIcon = styled.img`
  width: 26.67px;
  height: 13.33px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const PointIcon = styled.img`
  width: 18.67px;
  height: 26.67px;
`;

export const WriteTitle = styled.div`
  width: 996px;
  height: 710px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 120px;
`;

export const Title = styled.div`
  width: 1000px;
  height: 54px;
  font-size: 36px;
  font-weight: 700;
`;

export const BoardImg = styled.img`
  width: 996px;
  height: 480px;
`;
export const Contents = styled.div`
  width: 996px;
  height: 96px;
  font-weight: 400;
  font-size: 16px;
`;

export const LikeAndHateButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  height: 27px;
  margin-top: 160px;
  align-items: center;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 47px;
  justify-content: center;
  align-items: center;
`;

export const Hate = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 47px;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`;

export const LikeButton = styled.img`
  width: 22px;
  height: 20px;
  margin-bottom: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const HateButton = styled.img`
  width: 22px;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const LikeNum = styled.div`
  width: 40px;
  height: 27px;
  font-size: 18px;
  font-weight: 400;
  color: #ffd600;
  text-align: center;
`;

export const HateNum = styled.div`
  width: 40px;
  height: 27px;
  color: #828282;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;

export const EditButton = styled.button`
  width: 179px;
  height: 52px;
  background: white;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  border: 1px soild #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.div`
  display: flex;
  width: 632px;
  height: 52px;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const ListMoveButton = styled.button`
  width: 179px;
  height: 52px;
  background: white;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  border: 1px soild #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
`;

export const Underline = styled.div`
  width: 1199px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 40px;
`;

export const Underline3 = styled.div`
  width: 1198px;
  border-bottom: 1px solid #f2f2f2;
`;

export const Comment_Submit_Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 300px;
  margin-bottom: 46px;
`;

export const CommentImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;

export const Comment_Img_Name = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const CommentName = styled.div`
  width: 34px;
  height: 27px;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Comment_Submit = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;

export const Comment_Submit_Input = styled.textarea`
  width: 1196px;
  height: 108px;
  padding-top: 20px;
  padding-left: 20px;
  resize: none;
  border: none;
`;

export const Comment_Submit_Write_Button = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
`;

export const Comment_Submit_StringCount = styled.div`
  width: 1108px;
  height: 52px;
  border: none;
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
`;
export const Comment_Submit_Button = styled.button`
  width: 89.5px;
  height: 52px;
  background-color: black;
  border: none;
  padding: 14px 16px 14px 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: Noto Sans CJK KR;
  color: white;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const CommentList = styled.div`
  width: 1199px;
  display: flex;
  flex-direction: column;
`;

export const CommentList_Comment_Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1199px;
  /* height: 111px; */
  margin-bottom: 15px;
`;

export const CommentList_Profile_StarScope = styled.div`
  display: flex;
  width: 1200px;
  height: 27px;
  margin-bottom: 11px;
  /* text-align: center; */
`;
export const CommentList_ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const CommentList_Writer = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  width: 70px;
  height: 24px;
  margin-right: 18px;
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

export const Comment_Submit_String = styled.div`
  width: 53px;
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

export const CommentList_Comment_Container_Top = styled.div`
  display: flex;
  height: 100px;
`;

export const CommentList_Comment_Container_Top_Right = styled.div`
  display: column;
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

export const Writer_Password_Starscope = styled.div`
  display: flex;
  width: 550px;
  height: 52px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Comment_Writer_Input = styled.input`
  width: 180px;
  height: 52px;
  padding-top: 14px;
  padding-left: 20px;
  padding-bottom: 14px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  margin-right: 24px;
  border: 1px solid #bdbdbd;
`;

export const Comment_Password_Input = styled.input`
  width: 180px;
  height: 52px;
  padding-top: 14px;
  padding-left: 20px;
  padding-bottom: 14px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  margin-right: 26px;
  border: 1px solid #bdbdbd;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

// ============

export const Comments_Edit = styled.div`
  width: 1200px;
  margin-bottom: 40px;
`;

export const Edit_Writer_Password_Starscope = styled.div`
  display: flex;
  width: 550px;
  height: 52px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Edit_Comment_Writer_Input = styled.input`
  width: 180px;
  height: 52px;
  padding-top: 14px;
  padding-left: 20px;
  padding-bottom: 14px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  margin-right: 24px;
  border: 1px solid #bdbdbd;
`;

export const Edit_Comment_Password_Input = styled.input`
  width: 180px;
  height: 52px;
  padding-top: 14px;
  padding-left: 20px;
  padding-bottom: 14px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
  margin-right: 26px;
  border: 1px solid #bdbdbd;
`;

export const Edit_Comment_Submit = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;

export const Edit_Comment_Submit_Input = styled.textarea`
  width: 1196px;
  height: 108px;
  padding-top: 20px;
  padding-left: 20px;
  resize: none;
  border: none;
`;

export const Edit_Comment_Submit_Write_Button = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
`;

export const Edit_Comment_Submit_StringCount = styled.div`
  width: 1108px;
  height: 52px;
  border: none;
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const Edit_Comment_Submit_String = styled.div`
  width: 53px;
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

export const Edit_Comment_Submit_Button = styled.button`
  width: 89.5px;
  height: 52px;
  background-color: #ffd600;
  border: none;
  padding: 14px 16px 14px 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: Noto Sans CJK KR;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const StarScope = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  margin-bottom: 22px;
  margin-right: 908px;
`;

export const StarImg = styled.img`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

export const Underline2 = styled.div`
  width: 1199px;
  border-bottom: 1px solid #bdbdbd;
`;

export const DeleteButton = styled.button`
  width: 179px;
  height: 52px;
  background: white;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  border: 1px soild #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
`;
