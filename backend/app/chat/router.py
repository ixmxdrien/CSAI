from fastapi import APIRouter
from .schemas import ChatRequest, ChatResponse
from .service import handle_chat

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    response_text = handle_chat(request.message)
    return ChatResponse(response=response_text)