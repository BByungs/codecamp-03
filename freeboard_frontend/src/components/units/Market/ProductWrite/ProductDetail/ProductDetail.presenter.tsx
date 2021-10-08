import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import {
  Wrapper,
  InputBox,
  Togle,
  Input,
  VerticalLine,
  FontName,
  Fill,
  Pencil,
  Thickness,
  Dotline,
  DownArrow,
  Minus,
  MinusImg,
  TextSize,
  Plus,
  PlusImg,
  Bold,
  Incline,
  Magnet1,
  AImg,
  Magnet2,
  Plus2,
} from "./PrpductDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <Wrapper>
      <ProductWriteText name={props.name} />
      <InputBox>
        <Togle>
          <Fill src="/images/ProductWrite/fill.png" />
          <Pencil src="/images/ProductWrite/pencil.png" />
          <Thickness src="/images/ProductWrite/thickness.png" />
          <Dotline src="/images/ProductWrite/dotline.png" />
          <VerticalLine />
          <FontName>Arial</FontName>
          <DownArrow src="/images/ProductWrite/downarrow.png" />
          <Minus>
            <MinusImg src="/images/ProductWrite/minus.png" />
          </Minus>
          <TextSize>10</TextSize>
          <Plus>
            <PlusImg src="/images/ProductWrite/plus.png" />
          </Plus>
          <Bold src="/images/ProductWrite/bold.png" />
          <Incline src="/images/ProductWrite/incline.png" />
          <Magnet1 src="/images/ProductWrite/magnet.png" />
          <AImg src="/images/ProductWrite/a.png" />
          <VerticalLine />
          <Magnet2 src="/images/ProductWrite/magnet1.png" />
          <Plus2 src="/images/ProductWrite/plus2.png" />
        </Togle>
        <Input placeholder="상품을 설명해주세요." />
      </InputBox>
    </Wrapper>
  );
}
