import { useRef, useState } from "react";

export default function Web() {
  const inputEl = useRef();

  const [imgArr, setImgArr] = useState([]);

  const readImage = (input) => {
    // 미리보기 URL을 담아줄 임시 배열
    let newArr = [];
    // 인풋 태그에 파일이 있는 경우
    if (input.target.files) {
      //   들어간 파일의 길이만큼 반복
      for (let i = 0; i < input.target.files.length; i++) {
        // FileReader 인스턴스 생성
        const reader = new FileReader();
        // reader가 이미지 읽도록 하기
        reader.onload = (e) => {
          // 미리보기 URL을 스테이트에 저장
          newArr[i] = e.target.result;
          setImgArr([...newArr]);
        };
        reader.readAsDataURL(input.target.files[i]);
      }
    }
  };

  const handleFileBtn = () => {
    inputEl.current.click();
  };

  return (
    <>
      <div>
        {imgArr.length ? (
          imgArr.map((data) => (
            <img
              src={data}
              onClick={handleFileBtn}
              style={{ width: "500px" }}
              id="image"
              ref={inputEl}
            />
          ))
        ) : (
          <div>이미지 없음</div>
        )}

        <input
          hidden={true}
          ref={inputEl}
          id="fileTag"
          type="file"
          multiple
          onChange={readImage}
        ></input>
        <button onClick={handleFileBtn}>이미지 등록 버튼</button>
      </div>
    </>
  );
}
