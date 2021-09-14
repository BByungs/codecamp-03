import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>
      {/* isModalBisible이 true면 보임 */}
      <Modal visible={isModalVisible} onCancel={closeModal} onOk={handleOk}>
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
}
