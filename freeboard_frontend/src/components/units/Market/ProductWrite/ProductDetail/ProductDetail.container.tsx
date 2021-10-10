import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetail(props) {
  return (
    <ProductDetailUI
      name={props.name}
      register={props.register}
      formState={props.formState}
    />
  );
}
