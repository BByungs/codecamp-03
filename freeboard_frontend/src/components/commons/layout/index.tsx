import styled from "@emotion/styled";
import Header from "./header/header.container";

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
        <Header />
        <div
          style={{
            borderBottom: "1px solid #bdbdbd",
            width: "100%",
            marginBottom: "50px",
          }}
        ></div>
        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
