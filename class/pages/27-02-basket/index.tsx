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

  const onClickBasket = (el) => () => {
    // console.log("담기", el);
    // localStorage.setItem("baskets", JSON.stringify(el));
    // JSON.stringify로 안하면 로컬스토리지에 [object Object] 이렇게 저장됨
    // JSON.stringify가 문자열로 파싱해주는건가 보다.

    const baskets = JSON.parse(localStorage.getItem("baskets")) || []; // 기존께 없으면 빈배열, 기존께 있으면 있어야함

    // 이미 담았는지 체크!!!
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (basketEl._id === el._id) {
        isExists = true;
      }
    });
    if (isExists) {
      alert("이미 장바구니를 담으셨습니다.");
      return;
    }

    baskets.push(el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

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
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
