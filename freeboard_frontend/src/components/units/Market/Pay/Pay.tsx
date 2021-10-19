import Head from "next/head";
import React, { useState } from "react";
import { Wrapper, Text, Input, Button, Row1, Row2, Column } from "./Pay.styles";
import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        _id
        amount
      }
    }
  }
`;
// createPointTransactionOfLoading
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Pay() {
  const [inputPrice, setInputPrice] = useState("");
  const { data: LoginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  function onClickPayMent() {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: `포인트 ${inputPrice}병`,
        // 여기부터는 결제 승인 내역에 나오는 내용임
        amount: inputPrice,
        buyer_email: LoginData?.fetchUserLoggedIn.email,
        buyer_name: LoginData?.fetchUserLoggedIn.name,
      },
      function (rsp: any) {
        // callback
        console.log(rsp);

        if (rsp.success) {
          try {
            createPointTransactionOfLoading({
              variables: {
                impUid: String(rsp.imp_uid),
              },
            });
            alert(`${inputPrice}원 충전 되었습니다!!`);
          } catch (error: any) {
            alert(error.message);
          }
        }
      }
    );
  }

  function onChangePrice(event: any) {
    setInputPrice(event.target.value);
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          // Version 1.2.0 최신버전임
          // src="https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Wrapper>
        <Column>
          <Row2>
            {`${LoginData?.fetchUserLoggedIn.name}님의 보유 포인트는 ${
              LoginData?.fetchUserLoggedIn?.userPoint.amount || 0
            }원 입니다.`}
          </Row2>
          <Row1>
            <Text>충전금액 :</Text>
            <Input type="text" onChange={onChangePrice} />
            <Button onClick={onClickPayMent}>충전하기</Button>
          </Row1>
        </Column>
      </Wrapper>
    </>
  );
}
