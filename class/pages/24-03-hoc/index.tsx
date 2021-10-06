// Hoc를 불러와서 적용시켜줌

import { withAuth } from "../../src/components/commons/hocs/withAuth";

// 내가 원하는곳에서 편하게 인증가능
const HoCPage = () => {
  return <div>HOC 연습 페이지 입니다!</div>;
};

export default withAuth(HoCPage);
