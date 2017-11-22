#!/usr/bin/python
# -*- coding: UTF-8 -*-

# 打开文件
fo = open("vote.css", "r+")
# print (fo.name)

line = fo.read()
# print (line)
fo.close()

import re
_base = 20
# rem转px
def remtopx(matched):
    rem = matched.group(0)
    return str(float(re.sub('rem','',rem))*_base) + "px"

info=re.sub( r'\d*\.?\d*rem',remtopx,line)
# print (info)
# fo.truncate()
# fo.write(info)



fo = open("vote.css", "w")
fo.write(info)

fo.close()