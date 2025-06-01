import os
import sqlite3
import reflex as rx

from sqlmodel import select
from ..back_end.authentication import Total_member

class SendAttending(rx.State):
    member_id:str
    member_data:list[list]
    form_data:dict
    section_name:str
    curr_url:str
    initialize:bool

    def attending_handler(self, form_data):
        self.form_data = form_data
        
        
        self.get_member()

        return rx.redirect('/attending')

    def get_curr_url(self):
        return self.router.page.raw_path


    def get_member(self,member_id):
        conn = sqlite3.connect('./database/gntcswyouth.db')
        cur = conn.cursor()
        args = f"select * from total_member where section_name = (select section_name from total_member where member_id = \'{member_id}\')"
        cur.execute(args)
        data = cur.fetchall()
        return data

    def get_section_name(self, member_id):
        conn = sqlite3.connect('./database/gntcswyouth.db')
        cur = conn.cursor()
        args = f"select section_name from total_member where member_id = \'{member_id}\'"
        cur.execute(args)
        data = cur.fetchall()
        data = data[0][0]
        return rx.text(str(data))
    
    # 멤버 데이터 -> List
    # 로그인 한 멤버 데이터 불러오기
    def get_member(self) -> list:
        with rx.session() as session:
            member_data = session.exec(
                select(Total_member)
            ).all()
        
        # 전체 멤버 리스트화
        member_list = []
        for data in member_data:
            member_list.append(data.to_list())
        # print(f"member : {member_list}")

        # 멤버 변수 반영
        self.member_data = member_list

    



def show_table(data: list):
    return rx.table.row(
        rx.table.cell(data[1]),
        rx.table.cell(data[5]),
        rx.table.cell(data[7]),
        rx.table.cell(rx.checkbox(name=f'{data[2]}-box')),
        )


@rx.page(route="/attending")
def attending():
    return rx.container(
        rx.center(
            rx.vstack(
                rx.table.root(
                    rx.table.header(
                        rx.table.row(
                            rx.table.column_header_cell("이름"),
                            rx.table.column_header_cell("성별"),
                            rx.table.column_header_cell("출석현황"),
                        ),
                    ),
                    rx.table.body(
                        rx.foreach(
                            SendAttending.member_data, show_table,
                        ),
                    ),
                    width="100%"
                ),                  
            ),
        ),
    )
    
    
