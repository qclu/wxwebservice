#!/usr/bin/python

# coding=utf-8

from db import *

def add_new_mem(table, value):
    try:
        cur = conn.cursor()
        print('insert into table(', table, ') members: ', value)
        sql = "insert into " + table + " values(" + value + ");"
        cur.execute(sql)
        cur.close()
        conn.commit()
    except MySQLdb.Error,e:
        print "Mysql Error %d: %s" % (e.args[0], e.args[1])

