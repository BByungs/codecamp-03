import {
  Wrapper,
  HeaderChildren,
  HeaderImg,
  HeaderText,
  Header,
  Ask,
  AskInput,
  AskLine,
  TextCountAndBtn,
  TextCount,
  AskButton,
} from "./DetailAsk.styles";

export default function DetailAskUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickQuestion)}>
      <Wrapper>
        <Header>
          <HeaderChildren>
            <HeaderImg src="/commentimg.png" />
            <HeaderText>문의하기</HeaderText>
          </HeaderChildren>
        </Header>

        <Ask>
          <AskInput
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            {...props.register("contents")}
          />
          <AskLine />
          <TextCountAndBtn>
            <TextCount>0/100</TextCount>
            <AskButton type="submit">문의하기</AskButton>
          </TextCountAndBtn>
        </Ask>
      </Wrapper>
    </form>
  );
}
