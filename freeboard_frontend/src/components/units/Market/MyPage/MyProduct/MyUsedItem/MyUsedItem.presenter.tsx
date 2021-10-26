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
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

export default function MyUsedItemUI(props: any) {
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

      {props.fetchUseditemsISold?.fetchUseditemsISold.map(
        (el: any, idx: number) => (
          <Col key={uuidv4()}>
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
        )
      )}

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
            {new Array(5).fill(1).map((el: any, idx: number) => (
              <span
                style={{
                  marginRight: "40px",
                  fontSize: "15x",
                  cursor: "pointer",
                }}
                onClick={props.onClickPage(el + idx)}
              >
                {el + idx}
              </span>
            ))}
          </span>

          <span style={{ fontSize: "15px", cursor: "pointer" }}>{">"}</span>
        </div>
      </div>
    </Wrapper>
  );
}
