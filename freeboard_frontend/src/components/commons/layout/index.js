import styled from "@emotion/styled";
import Header from "./header/Header.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const Body = styled.div`
  width: 100%;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
