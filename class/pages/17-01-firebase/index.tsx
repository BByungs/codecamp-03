import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FireBasePage() {
  async function onclickSubmit() {
    const blog = collection(getFirestore(firebaseApp), "blog");
    // getFirestore라는것으로 firebaseApp을 가져오겠다라는거고
    // 컬렉션은 "blog"
    // 이 객체정보를 blog에 저장

    // addDoc에 blog에 이런 객체를 넣고 추가 시키는데
    // 값을 받을때까지 기다렸다가 추가해야되니까
    // 이부분에 await 써준것
    await addDoc(blog, {
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    });
  }

  async function onClickFetch() {
    const blog = collection(getFirestore(firebaseApp), "blog");
    // 이부분도
    // await을 해야하는 부분은
    // 마우스르 올렸을때 <Promise>라고 나옴
    const result = await getDocs(blog);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 페이지입니다!!</div>
      <button onClick={onclickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
