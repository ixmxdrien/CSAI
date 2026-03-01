import type { ChatMessageType } from "../types/chat";
import ChatMessage from "./ChatMessage";

interface Props {
  messages: ChatMessageType[];
}

export default function ChatWindow({ messages }: Props) {
  const systemMessage = messages.find((m) => m.role === "system");
  const conversationMessages = messages.filter((m) => m.role !== "system");

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "12px 4px 12px",
      }}
    >
      {systemMessage && (
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "16px",
            padding: "4px 8px",
          }}
        >
          {systemMessage.content}
        </div>
      )}

      {conversationMessages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </div>
  );
}