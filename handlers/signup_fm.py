#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import json
from methods import insertdb as mid

class SignupHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("form.html")
    
    def post(self):
        nickname = self.get_argument("nickname")
        name = self.get_argument("name")
        idnum = self.get_argument("idnum")
        phonenum = self.get_argument("phonenum")
        birthdate = self.get_argument("birthdate")
        gender = self.get_argument("gender")
        height = self.get_argument("height")
        weight = self.get_argument("weight")
        ht_province = self.get_argument("ht_province")
        ht_city = self.get_argument("ht_city")
        hj_province = self.get_argument("hj_province")
        hj_city = self.get_argument("hj_city")
        education = self.get_argument("education")
        edu_province = self.get_argument("edu_province")
        edu_city = self.get_argument("edu_city")
        edu_school = self.get_argument("edu_school")
        email = self.get_argument("email")
        house = self.get_argument("house")
        car = self.get_argument("car")
        job = self.get_argument("job")
        salary_w = self.get_argument("salary_w")
        intreast = self.get_argument("intreast")
        character = self.get_argument("character")
        value = "'" + nickname + "', '" + name + "', " + gender + ", " + salary_w + ", " + height + ", " + weight + ", '" + idnum + "', '" + ht_province + "|" + ht_city + "', '" + hj_province + "|" + hj_city + "', '" + birthdate + "', " + house + ", " + car + ", '" + job + "', '" + character +"', '" + intreast + "', " + education + ", '" + edu_province + "|" + edu_city + "|" + edu_school + "', '" + phonenum + "', '" + email + "'"
        mid.add_new_mem('members', value)
        self.write('success!')
