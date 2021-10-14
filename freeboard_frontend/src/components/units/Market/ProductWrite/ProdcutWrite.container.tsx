import { useForm } from "react-hook-form";
import ProductWriteUIPage from "./ProductWrite.presenter";
import { schema } from "./ProductWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductWritePage(props) {
  const router = useRouter();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
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
    console.log(data);
    try {
      const uploadFiles = files // [File1, File2, null]
        .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el?.data.uploadFile.url || "");
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: myImages,
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
              lat,
              lng,
            },
          },
        },
      });
      alert("상품을 등록합니다");
      // console.log(result.data.createUseditem._id);
      console.log("data:", data);
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
      trigger={trigger}
      data={props.data}
      onChangeFiles={onChangeFiles}
      setLat={setLat}
      setLng={setLng}
      lat={lat}
      lng={lng}
      setValue={setValue}
    />
  );
}
