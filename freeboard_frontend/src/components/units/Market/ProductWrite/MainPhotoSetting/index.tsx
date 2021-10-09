import styled from "@emotion/styled";
import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 996px;
  justify-content: flex-start;
  margin-bottom: 80px;
`;

const Radios = styled.div`
  display: flex;
`;

const Radio = styled.div`
  margin-right: 24px;
  display: flex;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Text = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export default function MainPhotoSetting() {
  return (
    <Wrapper>
      <ProductWriteText name="메인 사진 설정" />
      <Radios>
        <Radio>
          <Input type="radio" name="button" /> <Text>사진1</Text>
        </Radio>
        <Radio>
          <Input type="radio" name="button" /> <Text>사진2</Text>
        </Radio>
      </Radios>
    </Wrapper>
  );
}
