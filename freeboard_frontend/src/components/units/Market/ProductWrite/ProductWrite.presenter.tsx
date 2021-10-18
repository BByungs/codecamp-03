import ProductWriteInput01 from "../../../commons/ProductWrite/ProductWriteInput01";
import ProductWriteText from "../../../commons/ProductWrite/ProductWriteText";
import AddPicture from "./AddPicture/AddPicture.container";
import MainPhotoSetting from "./MainPhotoSetting";
import Map from "./Map/Map";
import ProductDetail from "./ProductDetail/ProductDetail.container";
import {
  Container,
  Wrapper,
  Header,
  ProductSubmitButton,
  All,
  ProductEdit,
  ProductEditButton,
  CancelButton,
} from "./ProductWrite.styles";

export default function ProductWriteUIPage(props) {
  const defaultValue = {
    lat: props.data?.fetchUseditem.useditemAddress?.lat,
    lng: props.data?.fetchUseditem.useditemAddress?.lng,
    address: props.data?.fetchUseditem.useditemAddress?.address,
    addressDetail: props.data?.fetchUseditem.useditemAddress?.addressDetail,
  };

  console.log(props.useditemAddress?.lat);
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <All>
        <Container>
          <Wrapper>
            {props.isEdit ? (
              <Header>상품 수정하기</Header>
            ) : (
              <Header>상품 등록하기</Header>
            )}
            <ProductWriteInput01
              name="상품명"
              placeholder="상품명을 작성해주세요."
              type="text"
              register={props.register("name")}
              formState={props.formState.errors.name?.message}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <ProductWriteInput01
              name="한줄요약"
              placeholder="상품명을 작성해주세요."
              type="text"
              register={props.register("remarks")}
              formState={props.formState.errors.remarks?.message}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <ProductDetail
              name="상품설명"
              register={props.register("contents")}
              formState={props.formState.errors.contents?.message}
              trigger={props.trigger}
              setValue={props.setValue}
              defaultValue={props.data?.fetchUseditem.contents}
              isEdit={props.isEdit}
            />
            <ProductWriteInput01
              name="판매가격"
              placeholder="판매 가격을 입력해주세요."
              type="text"
              register={props.register("price")}
              formState={props.formState.errors.price?.message}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <ProductWriteInput01
              name="태그입력"
              placeholder="#태그 #태그 #태그"
              type="text"
            />
            <Map
              useditemAddress={props.useditemAddress}
              MapErrorMsg={props.MapErrorMsg}
              setValue={props.setValue}
              defaultValue={defaultValue}
            />
            <AddPicture data={props.data} onChangeFiles={props.onChangeFiles} />
            <MainPhotoSetting />
            {props.isEdit ? (
              <ProductEdit>
                <CancelButton onClick={props.onClickCancel}>
                  취소하기
                </CancelButton>
                <ProductEditButton type="submit">수정하기</ProductEditButton>
              </ProductEdit>
            ) : (
              <ProductSubmitButton type="submit">등록하기</ProductSubmitButton>
            )}
          </Wrapper>
        </Container>
      </All>
    </form>
  );
}
