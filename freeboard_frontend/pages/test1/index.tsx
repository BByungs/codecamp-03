import axios from "axios";
import { useEffect, useState } from "react";

export default function Test1() {
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
      <div>test1</div>
      <img src={dogImage} />
    </>
  );
}
