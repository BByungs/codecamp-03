import { useEffect } from "react";
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

export default function MyFavoriteUI(props: any) {
  useEffect(() => {
    console.log(props.pickedLastPage);
  }, [props.pickedLastPage]);

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

      {props.fetchUseditemsIPicked?.fetchUseditemsIPicked.map(
        (el: any, idx: number) => (
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
            {new Array(10).fill(1).map(
              (_: any, idx: number) =>
                idx < props.pickedLastPage && (
                  <span
                    style={{
                      marginRight: "40px",
                      fontSize: "15x",
                      cursor: "pointer",
                    }}
                    onClick={props.onClickFavoritePage}
                    id={String(props.favoriteStartPage + idx)}
                  >
                    {props.favoriteStartPage + idx}
                  </span>
                )
            )}
          </span>

          <span style={{ fontSize: "15px", cursor: "pointer" }}>{">"}</span>
        </div>
      </div>
    </Wrapper>
  );
}
