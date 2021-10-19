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

  const MapErrorMsg = {
    address: formState.errors.address?.message,
    addressDetail: formState.errors.addressDetail?.message,
  };

  async function onClickSubmit(data) {
    console.log(data);
    try {
      const uploadFiles = files.map((el) =>
        el ? uploadFile({ variables: { file: el } }) : null
      );
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

  useEffect(() => {
    if (props?.isEdit || props?.data?.fetchUseditem) {
      // 수정하기 페이지에서만 작동 혹은 fetchUseditem data가 있을때만 작동
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
    }
  }, [
    props.isEdit,
    props.data?.fetchUseditem.name,
    props.data?.fetchUseditem.remarks,
    props.data?.fetchUseditem.contents,
    props.data?.fetchUseditem.price,
    props.data?.fetchUseditem.useditemAddress.lat,
    props.data?.fetchUseditem.useditemAddress.lng,
    props.data?.fetchUseditem.useditemAddress.address,
    props.data?.fetchUseditem.useditemAddress.addressDetail,
  ]);

  interface IMyUpdateInput {
    name?: string;
    remarks?: string;
    contents?: string;
    price?: number;
    images?: string[];
    tags?: string[];
    useditemAddress?: any;
  }

  async function onClickEdit(updateData) {
    const myUpdateInput: IMyUpdateInput = {};
    console.log("update한 data", updateData);

    if (updateData.name) myUpdateInput.name = updateData.name;
    if (updateData.remarks) myUpdateInput.remarks = updateData.remarks;
    if (updateData.contents) myUpdateInput.contents = updateData.contents;
    if (updateData.price) myUpdateInput.price = Number(updateData.price);
    // if (props.data.tags) myUpdateInput.tags = data.tags;
    // if (props.data.zipcode)
    //   myUpdateInput.useditemAddress.zipcode = data.zipcode;
    myUpdateInput.useditemAddress = {};
    if (updateData.address)
      myUpdateInput.useditemAddress.address = updateData.address;
    if (updateData.addressDetail)
      myUpdateInput.useditemAddress.addressDetail = updateData.addressDetail;
    if (updateData.lat) myUpdateInput.useditemAddress.lat = updateData.lat;
    if (updateData.lng) myUpdateInput.useditemAddress.lng = updateData.lng;

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateInput.images = nextImages; // 추가한 이미지
    if (props.data?.fetchUseditem.images?.length) {
      // 추가한 이미지가 있으면
      const prevImages = [...props.data?.fetchUseditem.images];
      myUpdateInput.images = prevImages.map(
        // 기존 데이터에서 후에 들어온 이미지 추가
        (el, index) => nextImages[index] || el // 추가 된 이미지를 업데이트
      );
    } else {
      myUpdateInput.images = nextImages; // 그냥 그대로 올라감
    }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: myUpdateInput,
          useditemId: router.query.useditemId,
        },
      });
      router.push(`/ProductWrite/${result.data.updateUseditem._id}`);
    } catch (error: any) {
      alert(error.message);
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
