# API Gateway service in Deno

## Requirements

- Deno >= 1.3

## Setup

We use [trex](https://crewdevio.mod.land/projects/Trex) to manage deno packages, so let's [install it](https://github.com/crewdevio/Trex#installation) first:

```bash
deno install -A --unstable --import-map=https://deno.land/x/trex/import_map.json -n trex --no-check https://deno.land/x/trex/cli.ts

```

Then clone this repo, go to `api-gateway-deno` folder to install dependencies and start service:


```bash
git clone https://github.com/ndaidong/microservices.git
cd  microservices/api-gateway-deno

# install dependencies
trex install

# start
trex run start

# another way, try to run with docker
docker-compose up
```

### Configurations

Proxy and the endpoints should be defined in `service.json`, for example:


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
