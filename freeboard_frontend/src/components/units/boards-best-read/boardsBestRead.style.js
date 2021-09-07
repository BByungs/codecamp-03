import styled from "@emotion/styled";

export const Container = styled.div`
    width: 1920;
    height: 1672px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 1200px;
    height: 1173px;
    display: flex;
    flex-direction: column;
`
export const BestPosts = styled.div`
    width: 1200px;
    height: 339px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`

export const BestPostsTitle = styled.div`
    width: 208px;
    height: 42px;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    
`
export const BestPost = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 257px;
`
export const Post = styled.div`
    width: 284px;
    height: 257px;
    border: none;
    box-shadow: 0px 4px 20px rgba(0,0,0,0.2);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    justify-content: space-between;
    /* padding-top : 1px; */
`
export const PostThumbnail = styled.img`
    width: 284px;
    height: 120px;
    border-radius: 20px 20px 0px 0px;
`

export const PostIntroduce = styled.div`
    display: flex;
    flex-direction: column;
    width: 282px;
    height: 137px;
    padding: 20px 20px 20px 20px;   
    justify-content: space-between;
`

export const PostTitle = styled.div`
    width: 280px;
    height: 27px;
    font-size: 18px;
    font-weight: 500;
`

export const WriterInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 242px;
    height: 48px;
`
export const WriterAndDate = styled.div`
    width: 103px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WriterNameAndPhoto = styled.div`
    width: 71px;
    height: 24px;
    display: flex;
    justify-content: space-between;
`

export const WriterPhoto = styled.img`
    width: 20px;
    height: 20px;
`

export const WriterName = styled.div`
    width: 45px;
    height: 24px;
    font-weight: 400;
    font-size: 16px;
`

export const WriterDate = styled.div`
    width: 123px;
    height: 18px;
    font-size: 12px;
    font-weight: 400;
    color: #828282;
`

export const LikeButtonAndCount = styled.div`
    width: 27px;
    // 18 + 6 + 
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const LikeButton = styled.img`
    width: 20px;
    height: 18px;
`

export const LikeCount = styled.div`
    width: 27px;
    height: 24px;
    font-weight: 400;
    font-size: 16px;
`

export const Search = styled.div`
    width: 1200px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const TitleSearch = styled.input`
    width: 776px;
    height: 52px;
    padding-left: 19px;
    padding-top: 17px;
    padding-bottom: 17.51px;
    background-color: #F2F2F2;
    border: none;
    border-radius: 10px;
`

export const YearMonthDaySearch = styled.input`
    width: 244px;
    height: 52px;
    color: #BDBDBD;
    padding: 14px 16px 14px 16px;
    font-size: 16px;
    font-family: Noto Sans CJK KR;
    text-align: center;
`

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
`

export const PostsList = styled.div`
    width: 1200px;
    height: 583px;
    border: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`

export const PostListTop = styled.div`
    width: 1200px;
    height: 52px;
    padding: 11px 63px 14px 40px;
    display: flex;
    flex-direction: row;

`

export const NumberName = styled.div`
    width: 34px;
    height: 27px;
    font-family: Noto Sans CJK KR;
    font-weight: 500;
    font-size: 18px;
`

export const TitleName = styled.div`
    width: 34px;
    height: 27px;
    font-family: Noto Sans CJK KR;
    font-weight: 500;
    font-size: 18px;
    margin-left: 401px;
`
export const PostListTopWriter = styled.div`
    width: 50px;
    height: 27px;
    font-family: Noto Sans CJK KR;
    font-weight: 500;
    font-size: 18px;
    margin-left: 401px;
`

export const WeatherName = styled.div`
    width: 34px;
    height: 27px;
    font-family: Noto Sans CJK KR;
    font-weight: 500;
    font-size: 18px;
    margin-left: 143px;
`
export const Underline = styled.div`
    border-bottom: 1px solid #BDBDBD;
    width: 1200px;
`

export const PostListBottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: 530px;
`
export const EachPosts = styled.div`
    display: flex;
    flex-direction: column;
`

export const EachPost = styled.div`
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: 53px;
    padding: 14px 40px 14px 50px;
`

export const PostsNumner = styled.div`
    width: 18px;
    height: 24px;
    font-family: Noto Sans CJK KR;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #4F4F4F;
`

export const PostsTitle = styled.div`
    width: 126px;
    height: 24px;
    font-family: Noto Sans CJK KR;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #4F4F4F;
    margin-left: 363px;
`

export const PostsWriter = styled.div`
    width: 45px;
    height: 24px;
    font-family: Noto Sans CJK KR;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #4F4F4F;
    margin-left: 357px;
`

export const PostsDate = styled.div`
    width: 87px;
    height: 24px;
    font-family: Noto Sans CJK KR;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #4F4F4F;
    margin-left: 123px;
`
export const Footer = styled.div`
    width: 1200px;
    height: 52px;
    display: flex;
    align-items: center;
`

export const Page = styled.div`
    width: 1029px;
    height: 19px;
    display: flex;
    justify-content: center;
`

export const LeftArrow = styled.img`
    width: 7.41px;
    height: 12px;
`

export const RightArrow = styled.img`
    width: 7.41px;
    height: 12px;
`

export const PostSubmitBtn = styled.button`
    width: 171px;
    height: 52px;
    padding: 14px 16px 14px 19px;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #F2F2F2;
    border-radius: 10px;
`

export const PencilImg = styled.img`
    width: 18px;
    height: 18px;
`

export const Text = styled.div`
    font-family: Noto Sans CJK KR;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-left: 11px;
`