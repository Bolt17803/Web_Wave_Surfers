from fastapi import FastAPI,Query
from fastapi import FastAPI,File, Form
from fastapi import UploadFile, File
from pydantic import BaseModel
from pymongo import MongoClient
from typing import List
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
# from models import Blog,Email

# mongodb+srv://latentvectorsopenlake:<latentvectorsopenlake>@latentvectors.lpkhohq.mongodb.net/?retryWrites=true&w=majority

app=FastAPI()

# def get_database():
#     client = MongoClient("mongodb+srv://latentvectorsopenlake:<latentvectorsopenlake>@latentvectors.lpkhohq.mongodb.net/?retryWrites=true&w=majority")
#     return client["mydatabase"]

database =[]

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)
class Email(BaseModel):
    email: str

class Blog(BaseModel):
    image: UploadFile = File(...)
    content: UploadFile = File(...)
    title: str = Form(...)
    tags: str = Form(...)

@app.get("/")
def root():
    return {"message" : "Hello Bobby"}

@app.post("/submit")
async def ids(user_data: str = Form(...)):
    print("new id added")
    data=json.loads(user_data)
    database.append(data['id'])
    print(database)

@app.post("/blogs")
async def create_blog(blog: Blog):
    try:
        image = blog.image
        content = blog.content
        title = blog.title
        tags = blog.tags

        # image_bytes = await image.read()
        # content_bytes = await content.read()

        return {"message": "Blog created successfully"}

    except Exception as e:
        return {"error": str(e)}
