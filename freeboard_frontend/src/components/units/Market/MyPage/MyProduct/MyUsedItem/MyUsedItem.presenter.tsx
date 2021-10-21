import {
  Wrapper,
  HeaderLine,
  HeaderRow,
  HeaderText,
  Col,
  Row,
  DateText,
  ImpText,
  ChargeText,
  Balance,
  UnderLine,
} from "./MyUsedItem.styles";

export default function MyFavoriteUI(props) {
  return (
    <Wrapper>
      <HeaderRow>
        <HeaderText style={{ width: "10%" }}>번호</HeaderText>
        <HeaderText style={{ width: "40%" }}>상품명</HeaderText>
        <HeaderText style={{ width: "20%" }}></HeaderText>
        <HeaderText style={{ width: "20%" }}>판매가격</HeaderText>
        <HeaderText style={{ width: "10%" }}>날짜</HeaderText>
      </HeaderRow>

      <HeaderLine />
      {props.fetchUseditemsISold?.fetchUseditemsISold
        .map((el, idx) => (
          <Col key={el._id}>
            <Row>
              <DateText style={{ width: "10%" }}>{idx + 1}</DateText>
              <ImpText style={{ width: "40%" }}>{el.name}</ImpText>
              {el.soldAt ? (
                <ChargeText style={{ width: "20%" }}>판매완료</ChargeText>
              ) : (
                <ChargeText style={{ width: "20%" }}></ChargeText>
              )}

              <ImpText style={{ width: "20%" }}>{el.price}</ImpText>
              <ImpText style={{ width: "10%" }}>
                {el.createdAt.slice(0, 10)}
              </ImpText>
            </Row>
            <UnderLine />
          </Col>
        ))
        .reverse()}
    </Wrapper>
  );
}
