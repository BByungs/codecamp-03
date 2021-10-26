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
  ImpText,
} from "./ChargeList.styles";

export default function ChargeListUI(props: any) {
  return (
    <Wrapper>
      <HeaderLine />

      <HeaderRow>
        <HeaderText style={{ width: "15%" }}>충전일</HeaderText>
        <HeaderText style={{ width: "45%" }}>결제 ID</HeaderText>
        <HeaderText style={{ width: "25%" }}>충전 내역</HeaderText>
        <HeaderText style={{ width: "15%" }}>충전 후 잔액</HeaderText>
      </HeaderRow>

      <HeaderLine />

      {props.fetchPointTransactionsOfLoading?.fetchPointTransactionsOfLoading
        .map((el: any) => (
          <Col key={el._id}>
            <Row>
              <DateText style={{ width: "15%" }}>
                {el.createdAt.slice(0, 10)}
              </DateText>
              <ImpText style={{ width: "45%" }}>{el.impUid}</ImpText>
              <ChargeText style={{ width: "25%" }}>{el.amount}</ChargeText>
              <Balance style={{ width: "15%" }}>{el.balance}</Balance>
            </Row>
            <UnderLine />
          </Col>
        ))
        .reverse()}
    </Wrapper>
  );
}
