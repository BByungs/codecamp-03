const Container = () => {
  return (
    <>
      <div>컨테이너 입니다.</div>
      {Presenter({ aaa: "철수" })}
    </>
  );
};

function withAuth(Component) {
  return function 이름은상관없음(props) {
    // withAuth()() 이렇게만 해도
    // 이름은 상관없음이 실행되기 때문에 이름을 이렇게 지은거임
    return Component;
  };
}

// Presenter와 함께 쓰이고 싶으면 withPresenter
// 인증 관련해서 같이 쓰이고 싶으면 withAuth
// 변수명 앞부분에 with를 붙임

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default Container;
