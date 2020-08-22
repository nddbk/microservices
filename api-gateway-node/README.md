# API Gateway service in Node.js

## Requirements

- Node.js >= 10.14

## Setup

```bash
git clone https://github.com/ndaidong/microservices.git
cd  microservices/api-gateway-node
npm i
npm start

# run with docker
docker-compose up
```

### Configurations

Before starting, the proxy and endpoints should be defined in `service.json`, for example:


```json
{
  "name": "API Gateway in Node.js",
  "version": "1.0.0",
  "host": "0.0.0.0",
  "port": 7652,
  "endpointMap": {
    "feed": "http://0.0.0.0:7454",
    "article": "http://0.0.0.0:7455"
  }
}
```

Once the gateway starts, we should got:

![](https://i.imgur.com/YdGNLM9.png)


## Test

```bash
npm test
```
