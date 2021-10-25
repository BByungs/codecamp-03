import { useState } from "react";

export default function BrowserStoragePage() {
  const [cookie, setCookie] = useState("");
  // function onClickSaveCookie() {
  //   document.cookie = "ddd=짱구"; // aaa가 key , 철수가 value
  // }

  function onClickSaveCookie() {
    document.cookie = cookie;
  }

  function onClickSaveLocalStorage() {
    localStorage.setItem("bbb", "영희"); // "bbb"라는키에 "영희"라는게 저장됨
  }

  function onClickSaveSessionStorage() {
    sessionStorage.setItem("ccc", "훈이");
  }

  // ! ######################################################################

  function onClickGetCookie() {
    // console.log(`cookie: ${document.cookie}`);

    // const email = "aaa@aaa.com"
    // email.split()

    // console.log(document.cookie);

    const temp = document.cookie
      .split("; ")
      // "; "을 기준으로 쪼갰엄
      // [aaa=철수 , zzz=맹구]
      .filter((el) => el.startsWith("aaa="))[0];
    // 각각의 문자열에 startsWith라는게 있는데
    // startsWith("aaa=")는 "aaa="라는걸로 시작하는거를 뜻함
    // * 결과는 aaa=철수

    console.log(temp.split("=")[1]);
    // * aaa=철수를 "=" 기준으로 나누면
    // * ["aaa" , "철수"] 이렇게 나오고 첫번째 인덱스를 찍으면
    // * 철수만 나옴
  }

  function onClickGetLocalStorage() {
    const local = localStorage.getItem("bbb");
    console.log(`localStorage(bbb): ${local}`);
  }

  function onClickGetSessionStorage() {
    const session = sessionStorage.getItem("ccc");
    console.log(`sessionStorage(ccc): ${session}`);
  }

  function onChangeCookie(event) {
    setCookie(event.target.value);
  }
  return (
    <>
      <input onChange={onChangeCookie}></input>
      <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
      <br />
      <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <br />
      <button onClick={onClickSaveSessionStorage}>
        세션스토리지에 저장하기
      </button>
      <br />
      =======================================================================
      <button onClick={onClickGetCookie}>쿠기에 있는 값 가져오기</button>
      <br />
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <br />
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
