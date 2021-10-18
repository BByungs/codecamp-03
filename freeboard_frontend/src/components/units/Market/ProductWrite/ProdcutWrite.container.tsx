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
      setValue("name", props.data?.fetchUseditem.name);
      setValue("remarks", props.data?.fetchUseditem.remarks);
      setValue("contents", props.data?.fetchUseditem.contents);
      setValue("price", props.data?.fetchUseditem.price);
    }
  }, [props?.isEdit, props?.data?.fetchUseditem]);

  interface IMyUpdateInput {
    name?: string;
    remarks?: string;
    contents?: string;
    price?: number;
    images?: string[];
    tags?: string[];
    useditemAddress?: any;
  }

  async function onClickEdit(data) {
    const myUpdateInput: IMyUpdateInput = {};
    console.log("12131213", data);

    if (data.name) myUpdateInput.name = data.name;
    if (data.remarks) myUpdateInput.remarks = data.remarks;
    if (data.contents) myUpdateInput.contents = data.contents;
    if (data.price) myUpdateInput.price = Number(data.price);
    if (data.tags) myUpdateInput.tags = data.tags;
    if (data.zipcode) myUpdateInput.useditemAddress.zipcode = data.zipcode;
    if (data.address) myUpdateInput.useditemAddress.address = data.address;
    if (data.addressDetail)
      myUpdateInput.useditemAddress.addressDetail = data.addressDetail;
    if (data.lat) myUpdateInput.useditemAddress.lat = data.lat;
    if (data.lng) myUpdateInput.useditemAddress.lng = data.lng;

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateInput.images = nextImages;
    if (props.data?.fetchUseditem.images?.length) {
      const prevImages = [...props.data?.fetchUseditem.images];
      myUpdateInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateInput.images = nextImages;
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
