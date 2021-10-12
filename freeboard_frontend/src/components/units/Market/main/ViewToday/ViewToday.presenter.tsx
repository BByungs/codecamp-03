import {
  ViewToday,
  Text,
  VTWrapper,
  Heart,
  HeartImg,
  HeartCount,
  Photo,
  PhotoImg,
  TextWrapper,
  Name,
  Remarks,
  Price,
  Tags,
} from "./ViewToday.styles";

export default function ViewTodayUI(props) {
  return (
    <ViewToday>
      <TextWrapper>
        <Text>오늘 본 상품</Text>
      </TextWrapper>
      {props.todayViewItems
        ?.slice(-2)
        ?.map((el) => (
          <VTWrapper onClick={props.onClickVT(el)} key={el._id}>
            <Heart>
              <HeartImg src="/images/ProductMain/heartimg.png" />
              <HeartCount>{el.pickedCount}</HeartCount>
            </Heart>
            <Photo>
              <PhotoImg src="/images/ProductMain/testimg.png" />
            </Photo>
            <Name>{el.name}</Name>
            <Remarks>{el.remarks}</Remarks>
            <Price>{`${el.price.toLocaleString()}원`}</Price>
            <Tags>#해외구매 #가성비 #최저가</Tags>
          </VTWrapper>
        ))
        .reverse()}
    </ViewToday>
  );
}
