import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  // const onClickBasket = (el) => () => {
  //   // console.log("담기", el);
  //   // localStorage.setItem("baskets", JSON.stringify(el));
  //   // JSON.stringify로 안하면 로컬스토리지에 [object Object] 이렇게 저장됨
  //   // JSON.stringify가 문자열로 파싱해주는건가 보다.

  //   const baskets = JSON.parse(localStorage.getItem("baskets")) || []; // 기존께 없으면 빈배열, 기존께 있으면 있어야함

  //   // 이미 담았는지 체크!!!
  //   let isExists = false;
  //   baskets.forEach((basketEl) => {
  //     if (basketEl._id === el._id) {
  //       isExists = true;
  //     }
  //   });
  //   if (isExists) {
  //     alert("이미 장바구니를 담으셨습니다.");
  //     return;
  //   }

  //   baskets.push(el);
  //   localStorage.setItem("baskets", JSON.stringify(baskets));
  // };

  function onClickLogin() {
    alert("로그인에 성공하였습니다!!");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품이 있습니다!, 장바구니 페이지로 이동할까요?"
      );
      if (result) {
        // 27-03-basket-logged-in 페이지로 이동
        router.push("/27-03-basket-logged-in");
      }
    }
  }

  // ! ###########################################################

  const onClickBasket = (boardEl, boardIdx) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // 기존께 있으면 기존껄 꺼내와야 함 | 없으면 빈 배열
    // * 저장할때 stringify로 문자열로 저장했으니까,
    // * 다시 객체로 받아와야해서 JSON.parse를 썼음

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (boardEl._id === basketEl._id) isExists = true;
    });

    if (isExists) {
      alert("이미 장바구니에 담으셨습니다!");
      return;
    }

    // delete boardEl.__typename
    baskets.push(boardEl);

    localStorage.setItem("baskets", JSON.stringify(baskets));
    // 저장할때 문자열로 저장했음 stringify로
  };

  // 처음 baskets가 있으면 비회원일때 장바구니담은게 있내요?
  // 장바구니로 옮길까요? 라는 메시지 띄워줄 수 있음.

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el, index)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
