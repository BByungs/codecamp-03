export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=철수"; // aaa가 key , 철수가 value
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

    const temp = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0];

    console.log(temp.split("=")[1]);
  }

  function onClickGetLocalStorage() {
    const local = localStorage.getItem("bbb");
    console.log(`localStorage(bbb): ${local}`);
  }

  function onClickGetSessionStorage() {
    const session = sessionStorage.getItem("ccc");
    console.log(`sessionStorage(ccc): ${session}`);
  }
  return (
    <>
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
