import { useEffect } from "react";
import ToastMessage from "../ToastMessage";
import { Container } from "./style";
import { useState } from "react";

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { text, type } = event.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    document.addEventListener("addtoast", handleAddToast);

    return () => {
      document.removeEventListener("addtoast", handleAddToast);
    };
  }, []);

  function handleRemoveMessage(id) {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
      {/* <ToastMessage text="Error toast" type="danger" /> */}
      {/* <ToastMessage text="Success toast" type="success" /> */}
    </Container>
  );
}
