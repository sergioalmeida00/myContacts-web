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

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
      {/* <ToastMessage text="Error toast" type="danger" /> */}
      {/* <ToastMessage text="Success toast" type="success" /> */}
    </Container>
  );
}
