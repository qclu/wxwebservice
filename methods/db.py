#!/usr/bin/env Python
# coding=utf-8

import MySQLdb

conn = MySQLdb.connect(host="localhost", user="root", passwd="1234qwer", db="members", port=3306, charset="utf8")    #连接对象
