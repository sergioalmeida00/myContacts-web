import { Container } from "./style";
import xCircleIcon from "../../../assets/images/x-circle.svg";
import checkCircleIcon from "../../../assets/images/check-circle.svg";

export default function ToastMessage({ message, onRemoveMessage }) {
  function handleRemoveMessage() {
    onRemoveMessage(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveMessage}>
      {message.type === "danger" && <img src={xCircleIcon} alt="X" />}
      {message.type === "success" && <img src={checkCircleIcon} alt="X" />}
      <strong> {message.text} </strong>
    </Container>
  );
}
