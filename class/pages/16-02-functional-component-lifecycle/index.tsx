import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function FunctionalComponentLifecyclePage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(); // 리액트에서 제공하는거라 import

  // componentDidMount와 동일
  useEffect(() => {
    console.log("컴포넌트 마운트 완료!!");
    inputRef.current.focus();

    // componentWillUnmount와 동일
    return () => {
      console.log("잘가요~~");
    };
  }, []);

  // componentDidUpdate와 동일
  useEffect(() => {
    console.log("컴포넌트 수정 완료!!");
  });

  // setState와 useEffect
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);
  //   얘는 시작돠 동시에 실행이 되는데(componentDidMount)
  //   setCount가 자동으로 실행됨
  //   이러한 방식은 좋지 않음
  //   마운트 되자마자 카운트를 새로 다시 받아서 다시 그리고
  //   하기 때문에, 이 방식을 어쩔수없이 써야할 경우가 아니라면
  //   이러한 방법은 가급적 피해주자

  // setState와 useEffect의 dependency-array(의존성 배열)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);
  // 얘는 카운트가 바뀔때마다 실행이됨
  // 근데 계속 실행됨

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      현재카운트: {count}
      <button onClick={onClickCount}>카운트 증가!!</button>
      <button onClick={onClickMove}>페이지 이동!!</button>
      <input type="text" ref={inputRef}></input>
    </>
  );
}
