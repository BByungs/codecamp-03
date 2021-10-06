export default function HoFPage() {
  // function onClickFunction(event) {
  //   alert(`${event.target.id}번째 입니다.`);
  // }

  const onClickFunction2 = (index) => (event) => {
    alert(`${index}번째 입니다.`);
  };

  return (
    <>
      <div>HOF 연습 페이지입니다</div>
      {["철수", "영희", "훈이"].map((el, index) => (
        <div onClick={onClickFunction2(index)}>
          {/* 서비스가 커지면 커질수록 id가 많아짐
            id가 중복되는게 생길 수 있음
            id를 겹치지 않게 쓰는 방법은
            hof를 쓰는 것 임 */}
          {el}입니다.
        </div>
      ))}
    </>
  );
}
