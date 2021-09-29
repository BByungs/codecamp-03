import { useRef, useEffect, useState } from "react";

export default function ImagePreloadPage() {
  const divRef = useRef<HTMLInputElement>();
  const [imageTag, setImageTag] = useState("");

  useEffect(() => {
    const img = new Image();
    // 자바스크립트 이미지 처리 관련 내장 객체
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"; // 이미지의 src를 미리 입력
    // 실제로 여기서 img.src 앞에 img부분이 태그임
    // webp 
    img.onload = () => {
      setImageTag(img);
    };
  }, []); // 마운트 되자마자 실행

  function onClickButton() {
    divRef.current?.appendChild(imageTag);
    // <div ref={divRef}></div>의 자식에 들어감
  }
  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
