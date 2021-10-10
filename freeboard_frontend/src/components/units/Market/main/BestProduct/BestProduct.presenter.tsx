import {
  Container,
  BestProduct,
  Photo,
  Name,
  Info,
  RemarksAndPrice,
  Remarks,
  Price,
  Heart,
  HeartIcon,
  HeartCount,
} from "./BestProduct.styles";

export default function BestProductUIPage(props) {
  return (
    <Container>
      {props.fetchUseditemsOfTheBest?.fetchUseditemsOfTheBest.map((el) => (
        <BestProduct
          key={el._id}
          id={el._id}
          onClick={props.onClickBestProduct}
        >
          <Photo src="/images/ProductMain/testimg.png" />
          <Name>{el.name}</Name>
          <Info>
            <RemarksAndPrice>
              <Remarks>{el.remarks}</Remarks>
              <Price>{`${el.price}원`}</Price>
            </RemarksAndPrice>
            <Heart>
              <HeartIcon />
              <HeartCount>{el.pickedCount}</HeartCount>
            </Heart>
          </Info>
        </BestProduct>
      ))}
    </Container>
  );
}
