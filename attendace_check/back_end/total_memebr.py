import reflex as rx

from urllib.parse import quote_plus
from typing import Optional
from sqlmodel import Field
from datetime import date

class Total_member(rx.Model, table=True):    
    member_name: str = Field(primary_key=True)
    member_id: str 
    member_pw: str 
    member_birth: Optional[date]
    member_sex: str 
    member_phone_number: Optional[str]

    def to_list(self) -> list:
        data = [
                self.member_name,
                self.member_id,
                self.member_pw,
                self.member_birth,
                self.member_sex,
                self.member_phone_number,
        ]

        return data
    
    def to_string(self) -> str:
        data = [
                self.member_name,
                self.member_id,
                self.member_pw,
                self.member_birth,
                self.member_sex,
                self.member_phone_number,
        ]

        data_str = ",".join(str(x) for x in data)
        print(data_str)
        return data_str

    # def add_handler(self, form_data:dict):
    #     print(form_data)
    #     self.member_name = form_data['member_name']
    #     self.member_birth = f"{form_data['year']}-{form_data['month']}-{form_data['day']}"
    #     self.member_youth_year = form_data['member_youth_year']
    #     self.member_phone_number = form_data['member_phone_number']
    #     self.member_section_name = form_data['member_section_name']
    #     self.member_status = form_data['member_status']

    # def add_member(self, form_data:dict):
    #     print(form_data)
    #     self.member_name = form_data['member_name']
    #     self.member_birth = f"{form_data['year']}-{form_data['month']}-{form_data['day']}"
    #     self.member_youth_year = form_data['member_youth_year']
    #     self.member_phone_number = form_data['member_phone_number']
    #     self.member_section_name = form_data['member_section_name']
    #     self.member_status = form_data['member_status']
    #     self.member_id = "12345678"
    #     with rx.session() as session:
    #         session.add(
    #             Total_member(
    #                 member_name = self.member_name, 
    #                 member_id = self.member_id,
    #                 member_birth = self.member_birth,
    #                 member_youth_year = self.member_youth_year,
    #                 member_phone_number = self.member_phone_number,
    #                 member_section_name = self.member_section_name,
    #                 member_status = self.member_status,
    #             )
    #         )
    #         session.commit()
