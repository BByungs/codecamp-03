// 30-01-payment
import styled from "@emotion/styled";
import Head from "next/head";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  function onClickPayMent() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("iamport"); // 예: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis", // 나이스페이 , nhn 다 다름
        pay_method: "card", // 결제 방법
        // merchant_uid: "ORD20180131-0000011", // 만약 있다면 중복 되면 안됨 (상품아이디) , 상품아이디가 없으면 빼버리면 됨
        // "ORD20180131-0000011"를 주문번호라 하는데, 0000011를 랜덤으로 준다고 함. (뒤에 있는 숫자로 어떤 상품인지 유추를 할 수 있기 때문에 랜덤으로 세팅함)

        // 여기부터는 결제 승인 내역에 나오는 내용임
        name: "손목시계",
        amount: 100, // 최소 금액
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp: any) {
        // callback
        console.log(rsp);

        if (rsp.success) {
          // mutation() => createPointTransactionOfLoading
          // ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  }

  return (
    <Wrapper>
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
      결제금액: <input type="text" />
      <button onClick={onClickPayMent}>결제하기</button>
    </Wrapper>
  );
}
