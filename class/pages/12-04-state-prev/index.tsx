import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    // 맨처음에 0을 가져오고
    // 임시저장공간에 count+1이 있으면 가져오는거임
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}
