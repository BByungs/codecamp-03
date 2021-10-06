import FunctionalComponentUI from "./functionalComponent.presenter";
export default function FunctionalComponent() {
  //   return <FunctionalComponentUI count={123} school="다람쥐 초등학교" />;
  // 함수안에 매개변수를 객처로 전달
  return FunctionalComponentUI({
    count: 123,
    school: "다람초등학교",
  });
}
