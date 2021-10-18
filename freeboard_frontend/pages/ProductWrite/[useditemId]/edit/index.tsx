// 수정 페이지

import ProductWritePage from "../../../../src/components/units/Market/ProductWrite/ProdcutWrite.container";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
    }
  }
`;

export default function ProductWriteEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  return <ProductWritePage isEdit={true} data={data} />;
}
