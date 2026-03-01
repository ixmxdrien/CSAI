from fastapi import FastAPI
from app.chat.router import router

app = FastAPI()

app.include_router(router)


@app.get("/")
def read_root():
    return {"message": "Welcome to the CyberSecurity AI Sandbox"}

