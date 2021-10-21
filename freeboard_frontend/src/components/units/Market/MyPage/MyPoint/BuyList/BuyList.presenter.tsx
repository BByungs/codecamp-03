import {
  Balance,
  BuyText,
  ChargeText,
  Col,
  DateText,
  Row,
  UnderLine,
  HeaderLine,
  Wrapper,
  HeaderRow,
  HeaderText,
  ImpText,
} from "./BuyList.styles";

export default function BuyListUI(props) {
  return (
    <Wrapper>
      <HeaderLine />

      <HeaderRow>
        <HeaderText style={{ width: "15%" }}>거래일</HeaderText>
        <HeaderText style={{ width: "45%" }}>상품명</HeaderText>
        <HeaderText style={{ width: "10%" }}>거래내역</HeaderText>
        <HeaderText style={{ width: "20%" }}>거래 후 잔액</HeaderText>
        <HeaderText style={{ width: "10%" }}>판매자</HeaderText>
      </HeaderRow>

      <HeaderLine />
      {props.fetchPointTransactionsOfBuying?.fetchPointTransactionsOfBuying.map(
        (el: any) => (
          <Col key={el._id}>
            <Row>
              <DateText style={{ width: "15%" }}>
                {el.createdAt.slice(0, 10)}
              </DateText>
              <ImpText style={{ width: "45%" }}>{el.useditem?.name}</ImpText>
              <BuyText
                style={{ width: "10%" }}
              >{`${el.amount.toLocaleString()}`}</BuyText>
              <Balance
                style={{ width: "20%" }}
              >{`${el.balance.toLocaleString()}`}</Balance>
              <DateText style={{ width: "10%" }}>
                {el.useditem?.seller?.name}
              </DateText>
            </Row>
            <UnderLine />
          </Col>
        )
      )}
    </Wrapper>
  );
}
