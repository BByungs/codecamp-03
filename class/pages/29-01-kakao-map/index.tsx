import Head from "next/head"; // 헤드 테그 만들수 있음
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage() {
  const value = {
    width: "500px",
    height: "400px",
  };

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=618745b280cea9ed79e1e61c9c19a187"
        ></script>
      </Head>
      <div id="map" style={value} />
    </>
  );
}
