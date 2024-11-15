import { Container } from "./style";
import xCircleIcon from "../../../assets/images/x-circle.svg";
import checkCircleIcon from "../../../assets/images/check-circle.svg";
import { useEffect } from "react";

export default function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      {message.type === "danger" && <img src={xCircleIcon} alt="X" />}
      {message.type === "success" && <img src={checkCircleIcon} alt="X" />}
      <strong> {message.text} </strong>
    </Container>
  );
}
