import {
  Wrapper,
  Info,
  SellerPhoto,
  SellerAndDate,
  Seller,
  Date,
  Icons,
  Link,
  Pin,
} from "./Header.styles";

export default function HeaderUI(props: any) {
  return (
    <Wrapper>
      <Info>
        <SellerPhoto src="/images/ProductDetail/sellerimg.png" />
        <SellerAndDate>
          <Seller>{props.data?.fetchUseditem.name}</Seller>
          <Date>{`Data: ${props.data?.fetchUseditem.createdAt.slice(
            0,
            10
          )}`}</Date>
        </SellerAndDate>
      </Info>
      <Icons>
        <Link />
        <Pin />
      </Icons>
    </Wrapper>
  );
}
