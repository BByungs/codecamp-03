import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Quiz01() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    console.log("Rendered!");
    return () => {
      console.log("bye!!");
    };
  }, []);

  useEffect(() => {
    console.log("changed!");
  });

  function onClickChange() {
    setIsChange((prev) => !prev);
    console.log(isChange);
  }

  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
