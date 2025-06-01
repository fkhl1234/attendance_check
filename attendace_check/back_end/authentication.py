import os
import sqlite3
import reflex as rx
from rxconfig import config
import time
from PIL import Image

from sqlmodel import select
import pandas as pd
import mysql.connector

from .total_memebr import Total_member

class Authentication(rx.State):
    form_data: dict = {}
    member_data: list[list]
    id_corr: bool
    pw_corr: bool
    login_success: bool = False
    attend_form_data: dict # 이름 구분 필요

    
    # 로그인 처리 함수
    def login_handler(self, form_data:dict):
        self.form_data = form_data
        
        member_id = form_data['memberid']
        member_pw = form_data['password']
        self.id_corr = self.check_login_id(member_id)
        self.pw_corr = self.check_login_pw(member_pw)

        # correction check
        print(f"autehtication : {self.id_corr}, {self.pw_corr}")
        
        

        if self.id_corr == False:
            return rx.window_alert("잘못된 계정을 입력하였습니다. 관리자에게 문의하십시오.")
        elif self.id_corr == True and self.pw_corr == False:
            return rx.window_alert("잘못된 비밀번호를 입력하였습니다. 관리자에게 문의하십시오.")
        elif self.id_corr == False and self.pw_corr == False:
            return rx.window_alert("잘못된 계정, 비밀번호 입니다. 관리자에게 문의하십시오.")
        else:
            self.login_success = True
            
            # 로그인 멤버 구역 멤버 획득
            self.get_member()
            
            return rx.redirect('/attendancy')
        

    # 로그인 시 id 확인
    def check_login_id(self, member_id):
        with rx.session() as session:
            # orm query
            data = session.exec(
                select(Total_member.member_id)
            )

            # id list
            id_list = [row for row in data]

        # id validation check
        if member_id in id_list:
            print("id True")
            return True
        else:
            print("id False")
            return False
    

    # 로그인 시 pw 확인
    def check_login_pw(self, member_pw):
        with rx.session() as session:
            # orm query
            data = session.exec(
                select(Total_member.member_pw)
            )

            # pw list
            pw_list = [row for row in data]

        # id validation check
        if member_pw in pw_list:
            print("pw True")
            return True
        else:
            print("pw False")
            return False
    
        
    # 멤버 데이터 -> List
    def get_member(self) -> list:
        if(self.login_success):
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

    # ------------------------------------------------------------------------

    # 출석 결과 제출 -- attending으로 이전
    def attending_handler(self, form_data):
        self.attend_form_data = form_data
        
        print(self.form_data)

    def to_csv(self):
        with rx.session() as session:
            member_data = session.exec(
                select(Total_member)
            ).all()

        member_list = [x.to_string() for x in member_data]

        # df = pd.DataFrame(member_list,columns=['member_name','member_id','member_pw','member_birth','member_sex','member_youth_year','member_phone_number','member_section_name','member_grade1','member_grade2','conduct_member','new_member','new_member_Count'])
        # print(df)
        # df.to_csv(
        #     rx.get_upload_dir() / "member.csv",
        #     encoding="cp949"
        # )

        print(member_list)

        return rx.download(
            data="\n".join([
                x for x in member_list
            ]).encode("cp949"),
            filename="member.csv"
        )


        
    

    # 불필요 함수
    # 로그인 멤버 구역 확인
    # def get_section_name(self, member_id):
    #     # conn = sqlite3.connect('./database/gntcswyouth.db')
    #     # conn = mysql.connector.connect(
    #     #     host='localhost',
    #     #     user="root",
    #     #     passwd="issac03)@",
    #     #     database="user_list"
    #     # )
    #     # cur = conn.cursor()
    #     # args = f"select Member_Section_Name from total_member where Member_ID = \'{member_id}\'"
    #     # cur.execute(args)
    #     # data = cur.fetchall()
    #     # data = data[0][0]
    #     # return data

    #     with rx.session() as session:
    #         section_name = session.exec(
    #             select(Total_member.member_section_name).where(
    #                 Total_member.member_id == member_id
    #             )
    #         ).first()
        
    #     return section_name
    

    # 불필요 함수
    # def board_member_check(self, member_id):
    #     # conn = sqlite3.connect('./database/gntcswyouth.db')
    #     conn = mysql.connector.connect(
    #         host='localhost',
    #         user="root",
    #         passwd="issac03)@",
    #         database="user_list"
    #     )
    #     cur = conn.cursor()
    #     args = f"select Member_Grade1 from Total_Member where Member_ID =\'{member_id}\'"
    #     cur.execute(args)
    #     data = cur.fetchall()[0][0]
    #     #print(data)
    #     if data == "회장단":
    #         return True
    #     else:
    #         return False


    # def check_page(self,data):
    #     return rx.redirect('/test')

    # def attend(self,data):
    #     page = attending(data)
    #     return page

    # def attending_handler(self, form_data):
    #     self.form_data = form_data
        
    #     print(self.form_data)