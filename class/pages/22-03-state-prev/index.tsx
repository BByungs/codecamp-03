import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    setCount((asdf) => {
      const aaa = 33;
      let bbb = 22;
      return asdf + 1;
    });
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
