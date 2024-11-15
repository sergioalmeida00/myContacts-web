import { Container, Overlay, Footer } from "./styles";
import { Button } from "../Button";
import ReactDOM from "react-dom";

export function Modal({
  danger,
  title,
  children,
  cancelLabel = "Cancelar",
  confirmLabel,
  visible,
  isLoading,
  onCancel,
  onConfirm,
}) {

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1> {title} </h1>

        <div className="modal-body">{children}</div>

        <Footer>
          <button type="button" className="cancel-button" onClick={onCancel} disabled={isLoading}>
            {cancelLabel}
          </button>
          <Button type="button" danger={danger} onClick={onConfirm} isLoading={isLoading}>
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
}
