import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();

  function onClickLogin(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>리액트 훅 폼 연습!!</div>
      이메일: <input type="text" {...register("myEmail")} />
      {/* myEmail이라는 스테이트가 생성됨 */}
      <br />
      비밀번호: <input type="password" {...register("myPassword")} />
      {/* myPassword이라는 스테이트가 생성됨 */}
      <br />
      <button type="submit">로그인하기</button>
    </form>
  );
}

// 로그은 버튼 => onClickLogin 실행
// => register로 등록된 데이터가 onClickLogin의 data로 들어옴

// handleSubmit으로 감싸줬기때문에 데이터가
// onClickLogin으로 들어온거임

// 기존같았으면 state를 일일이 만들어서
// 바인딩을 일일이 해줬어야 했는데
// 리액트 훅 폼을 쓰면 엄청 심플해짐

// button에 type="submit" 은 default임
