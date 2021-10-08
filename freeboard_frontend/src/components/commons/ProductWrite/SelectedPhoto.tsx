import styled from "@emotion/styled";

const DivX = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  width: 140px;
`;

const XImg = styled.img`
  width: 14px;
  height: 14px;
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
export default function SelectedPhoto() {
  return (
    <>
      <DivX>
        <XImg src="/images/ProductWrite/X.png" />
      </DivX>
      <Photo>
        <PhotoImg src="/images/ProductWrite/갤럭시탭Aimage03.png"></PhotoImg>
      </Photo>
    </>
  );
}
