import ProductWriteText from "../../../../commons/ProductWrite/ProductWriteText";
import { Wrapper, Quill, ErrorMessage, All } from "./PrpductDetail.styles";

export default function ProductDetailUI(props: any) {
  return (
    // 상품설명 에디터
    <All>
      <Wrapper>
        <ProductWriteText name={props.name} />

        {!props.isEdit && ( // 수정이 아닐때 defaultValue를 받지 않고
          <Quill
            onChange={props.onChangeMyEdit}
            modules={props.modules}
            placeholder="상품을 설명해주세요."
          />
        )}

        {props.isEdit &&
          props.defaultValue && ( // 수정일땐 defaultValue를 받는데, defaultValue가 있을때만 보여주고 , 있다면 defaultValue를 적용
            // 안그러면 에러 났음.
            <Quill
              onChange={props.onChangeMyEdit}
              modules={props.modules}
              placeholder="상품을 설명해주세요."
              defaultValue={props.defaultValue}
            />
          )}
      </Wrapper>
      <ErrorMessage>{props.formState}</ErrorMessage>
    </All>
  );
}
