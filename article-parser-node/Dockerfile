FROM node:17-alpine

ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH

RUN mkdir /app

WORKDIR /app
ADD . /app
RUN npm install
