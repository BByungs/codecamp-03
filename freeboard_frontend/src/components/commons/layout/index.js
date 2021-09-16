import styled from "@emotion/styled";
import Header from "./header/Header.container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
`;
const Body = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
