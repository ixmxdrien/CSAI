import { useState, type FormEvent } from "react";

interface Props {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    onSend(trimmed);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "8px",
        marginTop: "12px",
        paddingTop: "12px",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        style={{
          flex: 1,
          padding: "10px 14px",
          borderRadius: "999px",
          border: "1px solid #d1d5db",
          fontSize: "14px",
          outline: "none",
        }}
        placeholder="Écris ton message..."
      />
      <button
        type="submit"
        disabled={isLoading}
        style={{
          padding: "10px 18px",
          borderRadius: "999px",
          border: "none",
          fontSize: "14px",
          fontWeight: 500,
          cursor: isLoading ? "default" : "pointer",
          backgroundColor: isLoading ? "#9ca3af" : "#2563eb",
          color: "white",
          transition: "background-color 0.15s ease",
        }}
      >
        {isLoading ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}