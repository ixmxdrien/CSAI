import type { ChatRequest } from "../types/chat";

const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function sendMessage(message: string): Promise<string> {
  const payload: ChatRequest = {
    message,
  };

  const response = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const raw = (await response.json()) as unknown;

  if (typeof raw === "string") {
    return raw;
  }

  if (
    raw &&
    typeof raw === "object" &&
    "response" in raw &&
    typeof (raw as any).response === "string" &&
    (raw as any).response.trim() !== ""
  ) {
    return (raw as any).response as string;
  }

  if (
    raw &&
    typeof raw === "object" &&
    "message" in raw &&
    typeof (raw as any).message === "string"
  ) {
    return (raw as any).message as string;
  }

  return "Erreur : réponse invalide du serveur.";
}