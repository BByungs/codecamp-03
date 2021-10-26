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

export default function BestProductUIPage(props: any) {
  return (
    <Container>
      {props.data?.fetchUseditemsOfTheBest.map((el: any) => (
        <BestProduct
          key={el._id}
          id={el._id}
          onClick={props.onClickBestProduct(el)}
        >
          {el.images[0] ? (
            <Photo src={`https://storage.googleapis.com/${el.images[0]}`} />
          ) : (
            <Photo src="/noimage.png" />
          )}

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
