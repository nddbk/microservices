FROM node:12.18-slim

ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH

RUN mkdir /app

WORKDIR /app
ADD . /app
RUN npm install

EXPOSE 7553
