import { useState } from "react";
import { Modal } from "antd";

export default function ModalAddressesPage() {
  const [myZipcode, setMyZipcode] = useState("");
  const [myAddress, setMyAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalPassword, setModalPassword] = useState("");

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode);
    setMyAddress(data.address);
    console.log(data.zonecode);
    console.log(data.address);
    console.log(data);

    setIsOpen(false);
  };

  function onOpenZipcode(data) {
    setIsOpen(true);
    console.log(data);
  }

  function onCloseZipcode() {
    setIsOpen(false);
  }

  function modalPassword1(event) {
    setModalPassword(event.target.value);
  }
  console.log(modalPassword);
  return (
    <>
      <button onClick={onOpenZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onCloseZipcode} onOk={onOpenZipcode}>
          비밀번호: <input type="password" onChange={modalPassword1}></input>
        </Modal>
      )}
    </>
  );
}
