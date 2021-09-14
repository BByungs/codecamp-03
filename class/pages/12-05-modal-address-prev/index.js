// import DaumPostcode from "react-daum-postcode";
// import { useState } from "react";
// import { Modal } from "antd";

// export default function ModalAddressesPrevPage() {
//   const [myZipcode, setMyZipcode] = useState("");
//   const [myAddress, setMyAddress] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const handleComplete = (data) => {
//     setMyZipcode(data.zonecode);
//     setMyAddress(data.address);
//     console.log(data.zonecode);
//     console.log(data.address);

//     setIsOpen((prev) => !prev);
//   };

//   function onOpenZipcode() {
//     setIsOpen((prev) => !prev);
//     // 기존의 값을 가져와서 반대로 하는거
//   }

//   function onCloseZipcode() {
//     setIsOpen((prev) => !prev);
//   }
//   return (
//     <>
//       <button onClick={onOpenZipcode}>우편번호 검색</button>
//       {isOpen && (
//         <Modal visible={true} onCancel={onCloseZipcode}>
//           <DaumPostcode onComplete={handleComplete} />
//         </Modal>
//       )}
//     </>
//   );
// }

import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal } from "antd";

export default function ModalAddressesPrevPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
    setIsOpen((prev) => !prev);
  };

  function onToggleZipcode() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <button onClick={onToggleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onToggleZipcode}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
