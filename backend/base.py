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
    #print(data)
    #nm = request.args.get('name')
    nm = request.args.get('name')
    # email = request.args.get('email', type=str);
    #nm = request.args.get('name')
    #email = request.form.get('email')
    # name = data['name']
    # api.logger.debug("test")
    # api.logger.debug(name)
    #sys.stdout.write(str(type(request.args.get('name'))));
    item_doc = {
        'id': '7',
        'name': nm
    }
    db.collection.insert(item_doc)
    return json.loads(json_util.dumps(item_doc))


if __name__ == "__main__":
    api.run(host='0.0.0.0', port=5000, debug=True)





