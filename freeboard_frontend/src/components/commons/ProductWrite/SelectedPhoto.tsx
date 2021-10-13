import styled from "@emotion/styled";

const DivX = styled.div`
  display: flex;
  height: 20px;
  width: 180px;
  justify-content: flex-end;
`;

const XImg = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const Photo = styled.div`
  width: 180px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoImg = styled.img`
  width: 140px;
  height: 140px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;
export default function SelectedPhoto(props) {
  return (
    <Wrapper onClick={props.onClickUpload}>
      <DivX>
        <XImg src="/images/ProductWrite/X.png" />
      </DivX>
      <Photo>
        <PhotoImg src={props.src}></PhotoImg>
      </Photo>
    </Wrapper>
  );
}
