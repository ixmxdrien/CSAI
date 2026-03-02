import pytest
from app.chat.service import handle_chat


def test_handle_chat_returns_string():
    response = handle_chat("Hello, how are you?")
    assert isinstance(response, str)

def test_handle_chat_with_empty_sting():
    response = handle_chat("")
    assert isinstance(response, str)

def test_handle_chat_with_long_message():
    long_message = "hi" * 50
    response = handle_chat(long_message)
    assert isinstance(response, str)