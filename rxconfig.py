import reflex as rx

from urllib.parse import quote_plus
from typing import Optional
from sqlmodel import Field
from datetime import date

# MySQL 연결 정보
sql_config = {
    'username' : 'root',
    'password' : quote_plus('PW'),
    'host' : 'localhost',
    'port' : 3306,
    'database' : 'data_base',
}

config = rx.Config(
    app_name="attendace_check",
    db_url=f"mysql+pymysql://{sql_config['username']}:{sql_config['password']}@{sql_config['host']}:{sql_config['port']}/{sql_config['database']}"
)