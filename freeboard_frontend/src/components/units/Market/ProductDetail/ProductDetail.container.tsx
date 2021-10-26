import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductDetailUIPage from "./ProductDetail.presenter";
import {
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITME,
} from "./ProductDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetailPage() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITME);
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  const { data: fetchUserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  useEffect(() => {
    console.log("data", data?.fetchUseditem);
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=618745b280cea9ed79e1e61c9c19a187";
    console.log(script);
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat || 37.485155689411144,
            data?.fetchUseditem.useditemAddress?.lng || 126.89519472508692
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);
      });
    };
  }, [
    data?.fetchUseditem.useditemAddress?.lat,
    data?.fetchUseditem.useditemAddress?.lng,
  ]); // [] 의존성 배열을 쓰면 안 받아와짐
  // onload는 데이터를 받아오기전까지 반복 실행됨

  console.log(fetchUserLoggedIn);
  function onClickMain() {
    router.push("/");
  }

  function onClickMoveToEdit() {
    router.push(`/ProductWrite/${router.query.useditemId}/edit`);
  }

  function onClickBuy() {
    try {
      createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("상품을 구매합니다");
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onClickProductDelete() {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.useditemId,
        },
      });
      alert("상품을 삭제합니다.");
      router.push(`/`);
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <ProductDetailUIPage
      data={data}
      onClickMain={onClickMain}
      fetchUserLoggedIn={fetchUserLoggedIn}
      refetch={refetch}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickBuy={onClickBuy}
      onClickProductDelete={onClickProductDelete}
    />
  );
}
