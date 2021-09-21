import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";

const Body = styled.div`
  width: 1200px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Layout(props) {
  return (
    <>
      <Wrapper>
        <LayoutHeader></LayoutHeader>
        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
