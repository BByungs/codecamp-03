import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/22-context-api/MyBoardWrite.container";
export const MyContext = createContext(null);
// 얘는 만드는거고
export default function ContextApiPage() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
}

// isEdit을 순간이동을 하기위해서
// 일단 MyBoardWrite를 컨택스트로 감싸줘야함
// 그럼 모든곳에서 쓸 수 있음

// provider => MyBoardWrite에서 내려주고싶은거
