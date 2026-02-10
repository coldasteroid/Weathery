from fastapi import FastAPI, Depends, HTTPException, Form
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import models, database

app = FastAPI()

# 1. FIX CORS (Cross-Origin Resource Sharing)
# This allows your React app (running on a different port) to talk to this API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"], # React/Vite default ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Create the tables in Postgres
models.Base.metadata.create_all(bind=database.engine)
