from pydantic import BaseModel
from fastapi import UploadFile, File , Form

class Email(BaseModel):
    email: str

class Blog(BaseModel):
    image: UploadFile = File(...)
    content: UploadFile = File(...)
    title: str = Form(...)
    tags: str = Form(...)