import {
  Wrapper,
  HeaderLine,
  HeaderRow,
  HeaderText,
  Balance,
  BuyText,
  ChargeText,
  Col,
  DateText,
  Row,
  UnderLine,
} from "./SalesHistory.styles";

export default function SalesHistoryUI(props: any) {
  return (
    <Wrapper>
      <HeaderLine />

      <HeaderRow>
        <HeaderText style={{ width: "15%" }}>거래일</HeaderText>
        <HeaderText style={{ width: "45%" }}>상품명</HeaderText>
        <HeaderText style={{ width: "25%" }}>거래내역</HeaderText>
        <HeaderText style={{ width: "15%" }}>거래 후 잔액</HeaderText>
      </HeaderRow>

      <HeaderLine />

      {props.fetchPointTransactionsOfSelling?.fetchPointTransactionsOfSelling.map(
        (el: any) => (
          <Col key={el._id}>
            <Row>
              <DateText style={{ width: "15%" }}>
                {el.createdAt.slice(0, 10)}
              </DateText>

              <DateText style={{ width: "45%" }}>{el.useditem.name}</DateText>

              <ChargeText
                style={{ width: "25%" }}
              >{`${el.amount.toLocaleString()}`}</ChargeText>

              <Balance
                style={{ width: "15%" }}
              >{`${el.balance.toLocaleString()}`}</Balance>
            </Row>
            <UnderLine />
          </Col>
        )
      )}
    </Wrapper>
  );
}
