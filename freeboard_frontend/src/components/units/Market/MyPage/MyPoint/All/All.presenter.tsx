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
} from "./All.styles";

export default function MyPageAllUI(props) {
  return (
    <Wrapper>
      <HeaderLine />

      <HeaderRow>
        <HeaderText style={{ width: "15%" }}>날짜</HeaderText>
        <HeaderText style={{ width: "45%" }}>내용</HeaderText>
        <HeaderText style={{ width: "25%" }}>거래 및 충전 내역</HeaderText>
        <HeaderText style={{ width: "15%" }}>잔액</HeaderText>
      </HeaderRow>

      <HeaderLine />

      {props.fetchPointTransactions?.fetchPointTransactions.map((el: any) => (
        <Col key={el._id}>
          <Row>
            <DateText style={{ width: "15%" }}>
              {el.createdAt.slice(0, 10)}
            </DateText>
            {el.status === "충전" ? (
              <ChargeText style={{ width: "45%" }}>{el.status}</ChargeText>
            ) : (
              <BuyText style={{ width: "45%" }}>{el.status}</BuyText>
            )}
            {el.amount.toLocaleString()[0] !== "-" ? (
              <ChargeText style={{ width: "25%" }}>
                {`${el.amount.toLocaleString()}`}
              </ChargeText>
            ) : (
              <BuyText style={{ width: "25%" }}>
                {`${el.amount.toLocaleString()}`}
              </BuyText>
            )}
            <Balance
              style={{ width: "15%" }}
            >{`₩ ${el.balance.toLocaleString()}`}</Balance>
          </Row>
          <UnderLine />
        </Col>
      ))}
    </Wrapper>
  );
}
