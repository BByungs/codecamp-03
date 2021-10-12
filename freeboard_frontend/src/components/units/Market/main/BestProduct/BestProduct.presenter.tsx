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
      {props.data?.fetchUseditemsOfTheBest.map((el) => (
        <BestProduct
          key={el._id}
          id={el._id}
          onClick={props.onClickBestProduct(el)}
        >
          <Photo src="/images/ProductMain/testimg.png" />
          <Name>{el.name}</Name>
          <Info>
            <RemarksAndPrice>
              <Remarks>{el.remarks}</Remarks>
              <Price>{`${Number(el.price).toLocaleString()}원`}</Price>
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
