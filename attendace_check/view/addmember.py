import os
from sqlmodel import Field
import reflex as rx
from PIL import Image

from ..back_end.total_memebr import Total_member

class AddMember(rx.State):
    member_name:str
    member_id:str
    member_pw:str
    member_sex:str
    member_birth:str
    member_phone_number:str

    def add_handler(self, form_data:dict):
        print(form_data)
        self.member_name = form_data['member_name']
        self.member_birth = f"{form_data['year']}-{form_data['month']}-{form_data['day']}"
        self.member_phone_number = form_data['member_phone_number']

    def add_member(self, form_data:dict):
        print(form_data)
        self.member_name = form_data['member_name']
        self.member_birth = f"{form_data['year']}-{form_data['month']}-{form_data['day']}"
        self.member_phone_number = form_data['member_phone_number']
        self.member_id = form_data['member_ID']
        self.member_pw = form_data['member_PW']
        self.member_sex = form_data['member_sex']

        with rx.session() as session:
            session.add(
                Total_member(
                    member_name = self.member_name, 
                    member_id = self.member_id,
                    member_pw = self.member_pw,
                    member_sex = self.member_sex,
                    member_birth = self.member_birth,
                    member_phone_number = self.member_phone_number,
                )
            )
            session.commit()
            
        return rx.redirect('/attendancy')

@rx.page(route="/addmember")
def addmember():
    return rx.center(
            rx.card(
                rx.vstack(
                    rx.center(
                        rx.heading(
                            "신규 인원",
                            size="6",
                            as_="h2",
                            text_align="center",
                            width="100%",
                        ),
                        direction="column",
                        spacing="5",
                        width="100%",
                    ),
                    rx.form(
                        rx.vstack(
                            rx.hstack(
                                rx.text("이름 : "),
                                rx.input(placeholder="예) 홍길동", name = "member_name")
                            ),
                            rx.hstack(
                                rx.text("ID : "),
                                rx.input(placeholder="ID", name="member_ID")
                            ),
                            rx.hstack(
                                rx.text("PW : "),
                                rx.input(placeholder="PW", name="member_PW")
                            ),
                            rx.hstack(
                                rx.text("생년월일 : "),
                                #rx.input(placeholder="1990-00-00"),
                                rx.select([f"{i+1}" for i in range(1970,2010)], name="year"),
                                rx.text("년"),
                                rx.select([f"{i+1}" for i in range(12)],name="month"),
                                rx.text("월"),
                                rx.select([f"{i+1}" for i in range(31)],name="day"),
                                rx.text("일"),
                            ),
                            rx.hstack(
                                rx.text("성별 : "),
                                rx.select(['남', '여'],name="member_sex"),
                            ),
                            rx.hstack(
                                rx.text("전화번호 : "),
                                rx.input(placeholder="010-0000-0000", name="member_phone_number")
                            ),
                            
                            rx.hstack(
                                rx.button("제출", type="submit"),
                                rx.button(
                                    "닫기",
                                    type='button',
                                    on_click=rx.redirect(
                                        '/attendancy'
                                    )
                                ),
                                justify='end',
                                width="100%"
                            ),
                            spacing='3',
                        ),
                        on_submit=AddMember.add_member,
                    ),
                ),
            ),
            width="100vw",
            height="100vh",
            spacing="3",
        )
    