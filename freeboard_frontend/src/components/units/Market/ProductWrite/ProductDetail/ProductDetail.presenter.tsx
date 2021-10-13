import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import { Wrapper, Quill, ErrorMessage, All } from "./PrpductDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <All>
      <Wrapper>
        <ProductWriteText name={props.name} />
        <Quill
          onChange={props.onChangeMyEdit}
          modules={props.modules}
          placeholder="상품을 설명해주세요."
        />
      </Wrapper>
      <ErrorMessage>{props.formState}</ErrorMessage>
    </All>
  );
}
