#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Feb  4 20:44:51 2020

@author: l0s01zl
"""

import csv
import json
import urllib2

correct = 0;
incorrect = 0;
total = 0;

with open('ques-train.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        if row[2] == "train":
            total = total+1;
            if compareAndHit(row[0], row[1]):
                correct = correct+1
            else:
                incorrect = incorrect +1;
            break;
            
            
print ("Accuracy is "+str(correct/total*100));



def compareAndHit(q,res):
    url = "http://10.205.205.197:8764/api/apollo/apps/Training_Documents/query-pipelines/_lw_qwb_tmp_2728261764845734/collections/Training_Documents/select?echoParams=all&wt=json&json.nl=arrarr&sort&start=0&debug=false&rows=10&&q="+q
    response = urllib.request.urlopen(req)
    data = response.read()
    values = json.loads(data)
    return str(values['response']['docs']['0']['ows_BaseName_t']).lower().strip() == q.strip()