import os
import sqlite3
import reflex as rx
import time
from PIL import Image

from typing import List
from datetime import date

from ..back_end.authentication import Authentication
from ..back_end.total_memebr import Total_member


def show_table(data: List, index : int):
    return rx.table.row(
        rx.table.cell(index + 1),
        rx.table.cell(data[0]),
        rx.table.cell(data[3]),
        rx.table.cell(data[4]),
        rx.table.cell(data[5]),
        rx.table.cell(rx.checkbox(name=f'{data[1]}-box')), # member_id
    )

class select_Date(rx.State):
    yyyy: str = date.today().strftime("20%y")
    mm: str = date.today().strftime("%m")
    dd: str = date.today().strftime("%d")



@rx.page(route="/attendancy")
def attendancy():
    return rx.container(
        rx.center(
            rx.form.root(
                rx.vstack(
                    rx.vstack(
                        rx.heading("Attending", align="center"),
                        rx.hstack(
                            rx.text("날짜"),
                            rx.select(
                                [f"{i+1}" for i in range(2023,2100)],
                                name="year",
                                default_value=select_Date.yyyy,
                            ),
                            rx.text("년"),
                            rx.select(
                                [f"{i+1:02}" for i in range(12)],
                                name="month",
                                default_value=select_Date.mm,
                            ),
                            rx.text("월"),
                            rx.select(
                                [f"{i+1:02}" for i in range(31)],
                                name="day",
                                default_value=select_Date.dd,
                            ),
                            rx.text("일"),
                        )
                    ),
                    rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("순번"),
                                rx.table.column_header_cell("이름"),
                                rx.table.column_header_cell("생년월일"),
                                rx.table.column_header_cell("성별"),
                                rx.table.column_header_cell("번호"),
                                rx.table.column_header_cell("출석"),
                            ),
                        ),
                        rx.table.body(
                            rx.foreach(
                                Authentication.member_data, lambda data, index:
                                show_table(data, index)
                            ),
                        ),
                        width="100%"
                    ),
                    rx.hstack(
                        rx.link(rx.button("출결 결과 전송",on_click = rx.window_alert("전송을 확인합니다."),)),
                        rx.link(rx.button("돌아가기",align="center"),href="/"),
                        rx.cond(
                            Authentication.login_success,
                            rx.link(rx.button("관리자 페이지"),href="/attending"),
                            rx.text("")
                        ),
                        rx.cond(
                            Authentication.login_success,
                            rx.link(rx.button("신규회원추가"),href="/addmember"),
                            rx.text("")
                        ),
                        width="100%",
                        justify='end'
                    )
                ),
                on_mount=Authentication.get_member,
            ),
        ),
    )