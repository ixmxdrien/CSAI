from fastapi.testclient import TestClient
from app.main import app
import pytest

client = TestClient(app)

@pytest.mark.integration
def test_chat_endpoint_status():
    response = client.post("/chat", json={"message": "Hello, how are you?"})
    assert response.status_code == 200