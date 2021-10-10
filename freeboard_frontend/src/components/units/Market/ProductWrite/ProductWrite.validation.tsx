import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(1, "상품 이름은 최소 1자리입니다")
    .max(30, "상품 이름은 최대 6자리까지입니다")
    .required("상품 이름은 꼭 입력해주세요"),
  remarks: yup
    .string()
    .min(1, "상품 요약은 최소 1자리입니다")
    .max(30, "상품 요약은 최대 30자리까지입니다")
    .required("상품 요약을 해주세요"),
  contents: yup
    .string()
    .min(1, "상품 설명은 최소 1자리입니다.")
    .max(200, "상품 설명은 최대 200자리까지입니다")
    .required("상품 설명을 해주세요"),
  price: yup.string().required("상품 가격을 입력해주세요"),
  address: yup.string().required("주소를 입력해주세요."),
  addressDetail: yup.string().required("상세주소를 입력해주세요"),
  // images: yup.string().required("사진을 넣어주세요"),
});
