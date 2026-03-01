export type Role = 'user' | 'assistant' | 'system' ;

export interface ChatMessageType {
  role: Role;
  content: string;
}

export interface ChatRequest {
    message : string;
}

export interface ChatResponse {
    response: string;
}
