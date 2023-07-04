from fastapi import FastAPI, Query
from fastapi import FastAPI, File, Form
from pydantic import BaseModel
from typing import List
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json

app=FastAPI()
database =[]

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Email(BaseModel):
    email: str

@app.get("/")
def root():
    return {"message" : "Hello Bobby"}

@app.post("/submit")
async def ids(user_data: str = Form(...)):
    print("new id added")
    data=json.loads(user_data)
    database.append(data['id'])
    print(database)