import styled from "@emotion/styled";
import {
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";

// 첫 페이지로 이동하는 버튼
export const MoveStartPage = styled(DoubleLeftOutlined)`
  :hover {
    opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  }
  color: ${(props) => (props.isActive ? "red" : "black")};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

// 다음 페이지로 이동하는 버튼
export const MoveToRight = styled(RightOutlined)`
  margin-right: 15px;
  :hover {
    opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  }
  color: ${(props) => (props.isActive ? "red" : "black")};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

// 전 페이지로 이동하는 버튼
export const MoveToLeft = styled(LeftOutlined)`
  margin-left: 15px;
  :hover {
    opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  }
  color: ${(props) => (props.isActive ? "red" : "black")};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

// 마지막 페이지로 이동하는 버튼
export const MoveToLastPage = styled(DoubleRightOutlined)`
  color: ${(props) => (props.isActive ? "red" : "black")};
  :hover {
    opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  }
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

export const Container = styled.div`
  width: 1920;
  height: 1672px;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-right: 360px;
  padding-left: 360px;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 1173px;
  display: flex;
  flex-direction: column;
`;
export const BestPosts = styled.div`
  width: 1200px;
  height: 339px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const BestPostsTitle = styled.div`
  width: 208px;
  height: 42px;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;
export const BestPost = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 257px;
`;
export const Post = styled.div`
  width: 284px;
  height: 257px;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  justify-content: space-between;
  /* padding-top : 1px; */
  :hover {
    box-shadow: none;
  }
  cursor: pointer;
`;
export const PostThumbnail = styled.img`
  width: 284px;
  height: 120px;
  border-radius: 20px 20px 0px 0px;
`;

export const PostIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 137px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
`;

export const PostTitle = styled.div`
  width: 280px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
`;

export const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 242px;
  height: 48px;
`;
export const WriterAndDate = styled.div`
  width: 103px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WriterNameAndPhoto = styled.div`
  width: 71px;
  height: 24px;
  display: flex;
  justify-content: space-between;
`;

export const WriterPhoto = styled.img`
  width: 20px;
  height: 20px;
`;

export const WriterName = styled.div`
  width: 45px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
`;

export const WriterDate = styled.div`
  width: 123px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #828282;
`;

export const LikeButtonAndCount = styled.div`
  width: 27px;
  // 18 + 6 +
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LikeButton = styled.img`
  width: 20px;
  height: 18px;
`;

export const LikeCount = styled.div`
  width: 27px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
`;

export const Search = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const TitleSearch = styled.input`
  width: 776px;
  height: 52px;
  padding-left: 19px;
  padding-top: 17px;
  padding-bottom: 17.51px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;

export const YearMonthDaySearch = styled.input`
  width: 244px;
  height: 52px;
  color: #bdbdbd;
  padding: 14px 16px 14px 16px;
  font-size: 16px;
  font-family: Noto Sans CJK KR;
  text-align: center;
`;

export const ToSearch = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  padding: 14px 16px 14px 16px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border: none;
  border-radius: 10px;
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

export const PostsList = styled.div`
  width: 1200px;
  height: 583px;
  border: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const PostListTop = styled.div`
  width: 1200px;
  height: 52px;
  /* padding: 11px 63px 14px 40px; */
  line-height: 52px;
  display: flex;
  flex-direction: row;
  padding-right: 20px;
`;

export const NumberName = styled.div`
  /* width: 34px; */
  width: 10%;
  height: 27px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const TitleName = styled.div`
  /* width: 34px; */
  width: 70%;
  height: 27px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  /* margin-left: 401px; */
`;
export const PostListTopWriter = styled.div`
  /* width: 50px; */
  width: 10%;
  height: 27px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  /* margin-left: 401px; */
`;

export const WeatherName = styled.div`
  /* width: 34px; */
  width: 10%;
  height: 27px;
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  /* margin-left: 143px; */
`;
export const Underline = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 1200px;
`;

export const PostListBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 530px;
`;
export const EachPosts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EachPost = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 53px;
  /* padding: 14px 40px 14px 50px; */
  line-height: 52px;
  padding-right: 20px;
  :hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
`;

export const PostsNumner = styled.div`
  /* width: 18px; */
  width: 10%;
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #4f4f4f;
`;

export const PostsTitle = styled.div`
  /* width: 126px; */
  width: 70%;
  height: 52px;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #4f4f4f;
  /* margin-left: 363px; */
`;

export const PostsWriter = styled.div`
  /* width: 45px; */
  width: 10%;
  height: 52px;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #4f4f4f;
  /* margin-left: 357px; */
`;

export const PostsDate = styled.div`
  /* width: 100px; */
  width: 10%;
  height: 52px;
  font-family: Noto Sans CJK KR;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #4f4f4f;
  /* margin-left: 123px; */
`;
export const Footer = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.div`
  width: 1029px;
  height: 19px;
  display: flex;
  justify-content: center;
`;

export const LeftArrow = styled.img`
  width: 7.41px;
  height: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const RightArrow = styled.img`
  width: 7.41px;
  height: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Row = styled.div`
  margin: 15px;
  margin-bottom: 22px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  color: ${(props) => (props.changeColor === true ? "#ff6e40" : "black")};
`;

export const PageNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostSubmitBtn = styled.button`
  width: 171px;
  height: 52px;
  padding: 14px 16px 14px 19px;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  :hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
`;

export const PencilImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const Text = styled.div`
  font-family: Noto Sans CJK KR;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin-left: 11px;
  /* font-family: "myfont"; */
`;
