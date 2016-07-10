import json

from flask import Flask, request, Response, render_template

app = Flask(__name__)
app.debug = True


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', app='home')


@app.route('/users', methods=['GET'])
def users():
    return render_template('index.html', app='users')


@app.route('/api/users', methods=['GET'])
def get_users():
    users = [
        {
            'id': '1',
            'status': 'active',
            'username': 'John Smith'
        },
        {
            'id': '2',
            'status': 'banned',
            'username': 'Sara Conar'
        },
        {
            'id': '3',
            'status': 'deleted',
            'username': 'Jared Leto'
        },
    ]

    status = request.args.get('status', 'null')

    return json.dumps(list(filter(
        lambda x: status in [x['status'], 'null'],
        users)))
