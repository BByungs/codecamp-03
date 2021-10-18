import styled from "@emotion/styled";

const DivX = styled.div`
  display: flex;
  height: 20px;
  width: 180px;
  justify-content: flex-end;
  cursor: pointer;
`;

const XImg = styled.img`
  width: 14px;
  height: 14px;
`;

const Photo = styled.div`
  width: 140px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: pointer; */
`;

const PhotoImg = styled.img`
  width: 140px;
  height: 140px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  /* margin-right: 24px; */
  /* margin-right: 3px; */
`;
export default function SelectedPhoto(props) {
  return (
    <Wrapper>
      {/* <DivX onClick={props.onClickDelete}>
        <XImg src="/images/ProductWrite/X.png" />
      </DivX> */}
      <Photo onClick={props.onClickUpload}>
        <PhotoImg src={props.src}></PhotoImg>
      </Photo>
    </Wrapper>
  );
}
