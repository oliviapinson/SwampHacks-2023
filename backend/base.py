import flask
import json
import requests
import bson.json_util as json_util
from flask import Flask, request, jsonify, make_response
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from logging import FileHandler, WARNING
import sys;
import string;


config = {
  'ORIGINS': [
    'http://localhost:3000',  # React
    'http://127.0.0.1:5000',  # React
  ]
}

# App

api = Flask(__name__)

CORS(api)

client = MongoClient('mongodb+srv://swamphacks2023:brEE0112@hackmate.kllqfu4.mongodb.net/?retryWrites=true&w=majority')
db = client["HackMates"]
collection = db["HackMate"]


@api.route('/')
def my_profile():       #runs on http://127.0.0.1:5000
    response_body = {
        "new": 'test',
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    api.logger.debug("test")

    return response_body

@api.route("/inputs", methods=["GET","POST"])
def add_articles():
    data = request.get_json()
    nm = data['name']
    em = data['email']
    num = data['number']
    sch = data['school']
    yr = data['year']
    maj = data['major']
    sk = data['skills']
    lang = data['languages']
    nigh = data['night']
    gl = data['goal']
    take = data['takeaway']
    tm = data['time']
    loc = data['location']
    my = data['myers']
    
    item_doc = {
        'name': nm,
        'email': em,
        'number': num,
        'school': sch,
        'year': yr,
        'major': maj,
        'skills': sk,
        'languages': lang,
        'night': nigh,
        'goal': gl,
        'takeaway': take,
        'time': tm,
        'location': loc,
        'myers': my
    }
    db.collection.insert(item_doc)
    return json.loads(json_util.dumps(item_doc))


if __name__ == "__main__":
    api.run(host='0.0.0.0', port=5000, debug=True)





