import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogImage, setDogImage] = useState("");
  useEffect(() => {
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(image.data.message);
    }
    getImage();
  }, []);

  return (
    <>
      <div>오픈API</div>
      <img src={dogImage} />
    </>
  );
}

// 1리턴
// 2useEffect
// getImage를 만나고
// 함수내에서 axios값을 스테이트값에 저장
// 즉시실행
// 그리고나서 이미지태그에 연결
