import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import type { ChatMessageType } from "./types/chat";
import { sendMessage } from "./services/chatService";

export default function App() {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    { role: "system", content: "Tu es un assistant utile." },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const userMessage: ChatMessageType = {
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessage(trimmed);

      const assistantMessage: ChatMessageType = {
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
        padding: "16px",
        boxSizing: "border-box",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
          padding: "16px 20px",
        }}
      >
        <header
          style={{
            paddingBottom: "12px",
            marginBottom: "8px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            CSAI – Assistant
          </h1>
          <p
            style={{
              margin: "4px 0 0",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            Pose une question et l&apos;assistant te répondra.
          </p>
        </header>

        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}