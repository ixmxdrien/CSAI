# variables

BACKEND_DIR := backend
FRONTEND_DIR := frontend

# Backend
install-backend:
	cd $(BACKEND_DIR) && uv sync

backend-format:
	cd $(BACKEND_DIR) && uv format
	

# Frontend
install-frontend:
	cd $(FRONTEND_DIR) && npm install

