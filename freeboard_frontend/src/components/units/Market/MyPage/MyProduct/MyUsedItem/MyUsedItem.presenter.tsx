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

      <div
        style={{
          width: "980px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <span
            style={{ marginRight: "40px", fontSize: "15x", cursor: "pointer" }}
          >
            {"<"}
          </span>

          <span>
            {
              new Array(10).fill(1).map((_, idx) => (
                // idx <= props.soldLastPage && (
                <span
                  style={{
                    marginRight: "40px",
                    fontSize: "15x",
                    cursor: "pointer",
                  }}
                  onClick={props.onClickSoldPage}
                  id={String(props.soldStartPage + idx)}
                >
                  {props.soldStartPage + idx}
                </span>
              ))
              // )
            }
          </span>

          <span style={{ fontSize: "15px", cursor: "pointer" }}>{">"}</span>
        </div>
      </div>
    </Wrapper>
  );
}
