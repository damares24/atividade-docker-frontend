FROM node:alpine

RUN apk update

RUN apk add git 

RUN git clone https://github.com/damares24/atividade-docker-frontend.git

WORKDIR /atividade-docker-frontend/

