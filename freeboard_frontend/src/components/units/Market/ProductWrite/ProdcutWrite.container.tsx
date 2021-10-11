import { useForm } from "react-hook-form";
import ProductWriteUIPage from "./ProductWrite.presenter";
import { schema } from "./ProductWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductWritePage(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const useditemAddress = {
    zipcode: register("zipcode"),
    address: register("address"),
    addressDetail: register("addressDetail"),
    lat: register("lat"),
    lng: register("lng"),
  };

  const MapErrorMsg = {
    address: formState.errors.address?.message,
    addressDetail: formState.errors.addressDetail?.message,
  };

  async function onClickSubmit(data) {
    // console.log(data.imgaes);
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            // images: data.images,
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      alert("상품을 등록합니다");
      // console.log(result.data.createUseditem._id);
      router.push(`/ProductWrite/${result.data.createUseditem._id}`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  function onClickCancel() {
    router.push("/");
  }
  return (
    <ProductWriteUIPage
      handleSubmit={handleSubmit}
      register={register}
      onClickSubmit={onClickSubmit}
      formState={formState}
      useditemAddress={useditemAddress}
      MapErrorMsg={MapErrorMsg}
      onClickCancel={onClickCancel}
      isEdit={props.isEdit}
    />
  );
}
