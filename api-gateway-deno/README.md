# API Gateway service in Deno

## Requirements

- Deno >= 1.3

## Setup

```bash
git clone https://github.com/ndaidong/microservices.git
cd  microservices/api-gateway-deno

deno run --allow-net --allow-read app.ts

# run with docker
docker-compose up
```

### Configurations

Before starting, the proxy and endpoints should be defined in `service.json`, for example:


```json
{
  "name": "API Gateway in Deno",
  "version": "1.0.0",
  "host": "0.0.0.0",
  "port": 7252,
  "endpointMap": {
    "feed": "http://0.0.0.0:7454",
    "article": "http://0.0.0.0:7455"
  }
}
```

Once the gateway starts, we should got:

![](https://i.imgur.com/SlJnHSq.png)


## Test
