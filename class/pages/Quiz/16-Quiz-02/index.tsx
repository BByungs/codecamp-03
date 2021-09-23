import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function ChangeFunctionalComponent() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>();
  const router = useRouter();

  useEffect(() => {
    console.log("마운트 시작");
    inputRef.current.focus();
    return () => {
      console.log("컴포넌트가 제거됩니다~");
    };
  });

  useEffect(() => {
    console.log("컴포넌트가 변경되었습니다~");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
