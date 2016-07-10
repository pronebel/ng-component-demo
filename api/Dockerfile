FROM python:latest

WORKDIR /api

ADD ./requirements.txt ./requirements.txt

RUN pip3 install -r requirements.txt

ADD ./uwsgi.ini ./uwsgi.ini
ADD ./app ./app

ENTRYPOINT uwsgi --ini uwsgi.ini
