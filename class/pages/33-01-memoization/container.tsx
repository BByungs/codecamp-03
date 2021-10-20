import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 되었습니다!");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // ! 변수를 기록해놓는 방법(잘쓰이진 않음)
  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);
  // useEffect와 방식이 유사함
  // state가 변했다 해도 randomValue는 변하지 않음
  // 값을 저장해놓고 하는 경우는 프론트엔드에선 잘 쓰이지 않는다.
  // 그래도 가끔 쓰이긴 한다.
  // 함수를 저장하는 방법은 많이 쓰임
  // ! ##################################################

  // ! 함수를 기록해놓는 방법(많이쓰임)
  const onClickCountLet = useCallback(() => {
    console.log("countLet: ", countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  // 의존성 배열을 뭔가가 변경되었을때 실행되기해려고 썼었음
  // 디펜던시 배열이 바뀌면 다시 실행됨
  // * useCallback , useMemo , useEffect 쓸때 의존성배열에 [a,b,c,d,e] 이렇게 2개이상
  // * 있으면 안쓰는게 나음
  // ! ##################################################

  //   function onClickCountLet() {
  //     console.log("countLet: ", countLet + 1);
  //     countLet += 1;
  //   }

  // use로 시작하는(hook) 애들 제외하고 재 렌더링이 됨
  // * hook이 나오고나서 함수형 컴포넌틑 쓸 수 있었음

  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(state) +1</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1</button>

      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
