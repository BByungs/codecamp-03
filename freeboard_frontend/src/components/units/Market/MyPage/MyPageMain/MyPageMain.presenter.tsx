import {
  Wrapper,
  H1,
  H3,
  Box,
  TextInput,
  ChangePasswordButton,
  ButtonWrapper,
} from "./MyPageMain.styles";

export default function MyPageMainUI() {
  return (
    <Wrapper>
      <H1>비밀번호 변경</H1>
      <Box style={{ marginBottom: "20px" }}>
        <H3 style={{ marginRight: "112px", width: "92px" }}>현재 비밀번호</H3>
        <TextInput placeholder="현재 비밀번호를 입력해 주세요."></TextInput>
      </Box>

      <Box style={{ marginBottom: "20px" }}>
        <H3 style={{ marginRight: "126px", width: "78px" }}>새 비밀번호</H3>
        <TextInput placeholder="새 비밀번호를 비밀번호를 입력해 주세요."></TextInput>
      </Box>

      <Box style={{ marginBottom: "40px" }}>
        <H3 style={{ marginRight: "93px", width: "111px" }}>
          새 비밀번호 확인
        </H3>
        <TextInput placeholder="새 비밀번호를 비밀번호를 확인해 주세요."></TextInput>
      </Box>

      <ButtonWrapper>
        <ChangePasswordButton>비밀번호 변경</ChangePasswordButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
