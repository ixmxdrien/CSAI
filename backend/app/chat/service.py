import os
from openai import OpenAI
from dotenv import load_dotenv
from .memory import add_message, get_conversation

load_dotenv()
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key=OPENROUTER_API_KEY,
)

def handle_chat(message: str) -> str:
    add_message("user", message)
    conversation = get_conversation()
    
    completions = client.chat.completions.create(
        model="arcee-ai/trinity-large-preview:free",
        messages=conversation,
    )
    
    response = completions.choices[0].message.content
    return response