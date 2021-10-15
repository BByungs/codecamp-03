import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();
  function onClickKaKaoMap() {
    router.push("/29-03-kakao-map-routed");
  }
  return <button onClick={onClickKaKaoMap}>카카오맵 페이지로 이동</button>;
}
