import { Container } from "./style";
import xCircleIcon from "../../../assets/images/x-circle.svg";
import checkCircleIcon from "../../../assets/images/check-circle.svg";

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === "danger" && <img src={xCircleIcon} alt="X" />}
      {type === "success" && <img src={checkCircleIcon} alt="X" />}
      <strong> {text} </strong>
    </Container>
  );
}
