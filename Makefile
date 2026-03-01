# variables

BACKEND_DIR := backend
FRONTEND_DIR := frontend

# Backend
install-backend:
	cd $(BACKEND_DIR) && uv sync

backend-format:
	cd $(BACKEND_DIR) && uv format

be-launch :
	cd $(BACKEND_DIR) && uvicorn app.main:app --reload
	

# Frontend
install-frontend:
	cd $(FRONTEND_DIR) && npm install

fe-launch:
	cd $(FRONTEND_DIR) && npm run dev



# Launch Backend and Frontend
launch:
	cd $(BACKEND_DIR) && uvicorn main:app --reload &
	cd $(FRONTEND_DIR) && npm run dev