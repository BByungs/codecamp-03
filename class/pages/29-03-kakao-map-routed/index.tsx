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
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=618745b280cea9ed79e1e61c9c19a187";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.485053527846674,
            126.89533419993485
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);
        interface IMouseEvent {
          latLng: any;
        }
        window.kakao.maps.event.addListener(
          map,
          "click",
          // function (mouseEvent: { latLng: any }) {
          function (mouseEvent: IMouseEvent) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);

  return <div id="map" style={value} />;
}
