import { useForm } from "react-hook-form";
import ProductWriteUIPage from "./ProductWrite.presenter";
import { schema } from "./ProductWrite.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USED_ITEM,
  UPLOAD_FILE,
  UPDATE_USED_ITEM,
} from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductWritePage(props) {
  const router = useRouter();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    console.log(newFiles);
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
      const uploadFiles = files // [ files1 , null , null ]
        .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
      const results = await Promise.all(uploadFiles);
      // results = [null, resutl2, result3]

      const myImages = results.map((el) => el?.data.uploadFile.url || "");
      // myImages = ["", "http://googleapis.com/url1", "http://googleapis.com/url1"]
      // [...files] => 기존의 files안에는 [file1 , null , null] 이렇게 들어있음

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
              lat: Number(data.lat),
              lng: Number(data.lng),
            },
          },
        },
      });
      alert("상품을 등록합니다");
      console.log("data:", data);
      router.push(`/ProductWrite/${result.data.createUseditem._id}`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function onClickEdit(data) {
    const uploadFiles = files // [null, File2, File3]
      .map((el) => (el ? uploadFile({ variables: { file: el } }) : null));
    const results = await Promise.all(uploadFiles);
    // results = [null, resutl2, result3]

    const myImages = results.map((el) => el?.data.uploadFile.url || "");
    setValue("images", myImages);
    // myImages = ["", "http://googleapis.com/url1", "http://googleapis.com/url1"]
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            // images: myImages,
            images: data.images,
            useditemAddress: {
              address: data.address,
              addressDetail: data.addressDetail,
              lat: Number(data.lat),
              lng: Number(data.lng),
            },
          },
          useditemId: router.query.useditemId,
        },
      });
      alert("상품을 수정합니다");
      router.push(`/ProductWrite/${result.data.updateUseditem._id}`);
    } catch (error) {
      alert(error);
    }
  }

  if (props.isEdit) {
    useEffect(() => {
      setValue("name", props.data?.fetchUseditem.name);
      setValue("remarks", props.data?.fetchUseditem.remarks);
      setValue("contents", props.data?.fetchUseditem.contents);
      setValue("price", props.data?.fetchUseditem.price);
      setValue("lat", props.data?.fetchUseditem.useditemAddress.lat);
      setValue("lng", props.data?.fetchUseditem.useditemAddress.lng);
      setValue("address", props.data?.fetchUseditem.useditemAddress.address);
      setValue(
        "addressDetail",
        props.data?.fetchUseditem.useditemAddress.addressDetail
      );
      setValue("images", props.data?.fetchUseditem.images);
    });
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
      setValue={setValue}
      onClickEdit={onClickEdit}
    />
  );
}
