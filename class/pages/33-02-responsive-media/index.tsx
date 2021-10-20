// import styled from "@emotion/styled";
// import { breakPoints } from "../../src/commons/styles/media";

// // CSS-IN-JS
// const Wrapper = styled.div`
//   width: 1000px;
//   height: 1000px;
//   background-color: red;

//   @media ${breakPoints.tablet} {
//     width: 500px;
//     height: 500px;
//     background-color: green;
//   }

//   @media ${breakPoints.mobile} {
//     width: 100px;
//     height: 100px;
//     background-color: blue;
//   }
// `;
// export default function ResponsiveMediaPage() {
//   return <Wrapper>상자</Wrapper>;
// }

// * pixel로 고정시키면 깨짐 그래서 %로 줌

// * 높이는 크던 작던 간에 스크롤을 함
// * 일반적인 모바일 크기는 고정적이고(가끔 퍼센트로 줌 서비스 특성마다 다름)
// * 가로는 퍼센트로 준다.

// * 최소를 아이폰5기준으로 한다라고 정한다면 아이폰5 width를 기준으로
// * 퍼센트로 늘리고함
// ! 최소사이즈를 맞추고 작업해야 편함, 최대사이즈를 정해놓고 작업하면 작은사이즈를 만들때 힘듦

import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

// CSS-IN-JS
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: none; // 보이지 않아야 할 부분은 이렇게 처리
  }
`;
export default function ResponsiveMediaPage() {
  return <Wrapper>상자</Wrapper>;
}
