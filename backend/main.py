from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from database import get_db
import oracledb

app = FastAPI(title="Khathutshelo Portfolio API")

# Allow React frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for contact form
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

@app.post("/api/contact")
async def submit_contact(msg: ContactMessage, db=Depends(get_db)):
    cursor = db.cursor()
    try:
        cursor.execute(
            """INSERT INTO contact_messages (full_name, email, subject, message)
               VALUES (:1, :2, :3, :4)""",
            [msg.name, msg.email, msg.subject, msg.message]
        )
        db.commit()
        return {"status": "ok", "message": "Message saved successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        cursor.close()

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "database": "Oracle"}