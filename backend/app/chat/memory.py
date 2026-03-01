conversation = [{"role": "system", "content": "You are a helpful assistant."}]


def add_message(role:str, content:str):
    conversation.append({"role": role, "content": content})

def get_conversation():
    return conversation

def clear_conversation():
    conversation[:] = conversation[:1]

