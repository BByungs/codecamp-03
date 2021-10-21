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
} from "./MyFavorite.styles";

export default function MyFavoriteUI(props) {
  return (
    <Wrapper>
      <HeaderRow>
        <HeaderText style={{ width: "10%" }}>번호</HeaderText>
        <HeaderText style={{ width: "25%" }}>상품명</HeaderText>
        <HeaderText style={{ width: "25%" }}></HeaderText>
        <HeaderText style={{ width: "15%" }}>판매가격</HeaderText>
        <HeaderText style={{ width: "15%" }}>판매자</HeaderText>
        <HeaderText style={{ width: "10%" }}>날짜</HeaderText>
      </HeaderRow>

      <HeaderLine />

      {props.fetchUseditemsIPicked?.fetchUseditemsIPicked.map((el, idx) => (
        <Col key={el._id}>
          <Row>
            <DateText style={{ width: "10%" }}>{idx + 1}</DateText>
            <ImpText style={{ width: "25%" }}>{el.name}</ImpText>
            {el.soldAt ? (
              <ChargeText style={{ width: "25%" }}>판매완료</ChargeText>
            ) : (
              <ChargeText style={{ width: "25%" }}></ChargeText>
            )}

            <ImpText
              style={{ width: "15%" }}
            >{`₩ ${el.price.toLocaleString()}`}</ImpText>
            <ImpText style={{ width: "15%" }}>{el.seller?.name}</ImpText>
            <ImpText style={{ width: "10%" }}>
              {el.createdAt.slice(0, 10)}
            </ImpText>
          </Row>
          <UnderLine />
        </Col>
      ))}
    </Wrapper>
  );
}
