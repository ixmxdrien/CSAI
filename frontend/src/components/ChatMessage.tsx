import type { ChatMessageType } from "../types/chat";

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  const label =
    message.role === "user"
      ? "Vous"
      : message.role === "assistant"
      ? "Assistant"
      : "Système";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px",
        padding: "0 4px",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: isUser ? "flex-end" : "flex-start",
          gap: "4px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#9ca3af",
          }}
        >
          {label}
        </span>
        <div
          style={{
            backgroundColor: isUser ? "#2563eb" : "#e5e7eb",
            color: isUser ? "white" : "#111827",
            padding: "8px 12px",
            borderRadius: "16px",
            borderBottomRightRadius: isUser ? "4px" : "16px",
            borderBottomLeftRadius: isUser ? "16px" : "4px",
            fontSize: "14px",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {message.content || "Réponse vide du serveur."}
        </div>
      </div>
    </div>
  );
}