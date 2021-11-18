# Article Parser service in Node.js

## Requirements

- Node.js >= 10.14

## Setup

```bash
git clone https://github.com/ndaidong/microservices.git
cd  microservices/article-parser-node
npm i
npm start

# run with docker
docker-compose up
```


## APIs

| Method | Endpoint  |
|--------|---------- |
| GET | http://0.0.0.0:7655/article?url={ARTICLE_URL} |


## Test

```bash
npm test
```
