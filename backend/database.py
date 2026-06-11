import oracledb
import os
from dotenv import load_dotenv

load_dotenv()

# Create connection pool (thin mode, no 'threaded' argument)
pool = oracledb.create_pool(
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    dsn=os.getenv("DB_DSN"),
    min=1,
    max=5,
)

def get_db():
    """Dependency to get a connection from the pool"""
    conn = pool.acquire()
    try:
        yield conn
    finally:
        pool.release(conn)