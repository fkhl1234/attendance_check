import os
import sqlite3
import reflex as rx
import time
from PIL import Image

from ..back_end.authentication import Authentication

def member_query_dialog():
    return rx.dialog.root(
        rx.dialog.trigger(rx.button("회원조회", size="3",width="100%")),
        rx.dialog.content(
            rx.dialog.title("회원조회", margin_bottom='3%'),
            rx.dialog.description(
                rx.vstack(
                    rx.hstack(
                        rx.text(rx.text.strong("이름 : ")),
                        rx.input(type="member_query_name"),
                        width="100%",
                        justify='end'
                    ),
                    rx.hstack(
                        rx.text(rx.text.strong("생년월일 : ")),
                        rx.input(type="member_query_birth"),
                        width="100%",
                        justify='end'
                    ),
                    rx.hstack(
                        rx.text(rx.text.strong("전화번호 : ")),
                        rx.input(type="member_query_phone_number"),
                        width="100%",
                        justify='end'
                    ),
                    width='80%',
                    direction='column',
                ),
                margin_bottom='3%'
            ),
            rx.flex(
                rx.dialog.close(
                    rx.button("찾기", size="3"),
                ),
                rx.dialog.close(
                    rx.button("닫기", size="3"),
                ),
                spacing='3',
                width='100%',
                justify='end',
            ),
            max_width="25%",
            width='100%',
            style={"textAlign": "center"},
        ),
    )

@rx.page(route="/", title="login")
def login() -> rx.Component:
    return rx.center(
                rx.card(
                    rx.vstack(
                        rx.center(
                            rx.heading("Login",
                                size="9",
                                as_="h1",
                                text_align="center",
                                width="100%",
                            ),
                            direction="column",
                            spacing="5",
                            width="100%",
                        ),
                        rx.form(
                            rx.vstack(
                                rx.text(
                                    "ID",
                                    size="6",
                                    weight="medium",
                                    text_align="left",
                                    width="100%",
                                ),
                                rx.input(
                                    placeholder="ID",
                                    name="memberid",
                                    size="3",
                                    width="100%",
                                    required=True,
                                ),
                                rx.text(
                                    "PW",
                                    size="6",
                                    weight="medium",
                                ),
                                rx.input(
                                    placeholder="PW",
                                    name="password",
                                    type="password",
                                    size="3",
                                    width="100%",
                                    required=True,
                                ),
                                rx.center(
                                    rx.stack(
                                        rx.button(
                                            "로그인", 
                                            size="3", 
                                            width="100%",
                                        ),
                                        member_query_dialog(),
                                        justify="center",
                                    ),
                                    spacing="5",
                                    width="100%",
                                ),
                                spacing="4"
                            ),
                            on_submit=Authentication.login_handler,
                        ),
                        width="100%",                
                    ),
                    size="4",
                    max_width="25%",
                    width="100%",
                    max_height="30%",
                    height='100%',
                ),
                width="100vw",      # 뷰포트 전체 너비
                height="100vh",     # 뷰포트 전체 높이
                display="flex",
                justify_content="center",  # 가로 중앙
                align_items="center", 
            )