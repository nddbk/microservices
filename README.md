# microservices
A set of regular microservices for practice and reference.

# List of microservices to implement


### Status

- `Not started yet`: no code base created
- `Initialized`: setup code base with default router, few lines of doc
- `Implementing`: working on the functions
- `Basic implementation`: main function works, but incomplete
- `Done`: finish main function, standardize data format, fully tested


Service | Type | Port | Status
--|--|--|--
Front-end GUI | View | 7777 | Not started yet
Load balancer with Nginx | Routing | 7711|  Not started yet
Load balancer with Traefic | Routing | 7721 |  Not started yet
Load balancer with HAProxy | Routing | 7731 |  Not started yet
API Gateway in Node.js | Routing | 7652 |  Basic implementation
API Gateway in Python | Routing | 7552 |  Not started yet
API Gateway in Golang | Routing | 7452 |  Not started yet
API Gateway in Vlang | Routing | 7352 |  Not started yet
API Gateway in Deno | Routing | 7252 |  Basic implementation
Authentication/Authorization service in Node.js | Security | 7653 | Not started yet
Authentication/Authorization service in Python | Security | 7553 | Not started yet
Authentication/Authorization service in Golang | Security | 7453 | Not started yet
Authentication/Authorization service in Vlang | Security | 7353 | Not started yet
Authentication/Authorization service in Deno | Security | 7253 | Not started yet
Feed Parser service in Node.js | Extraction | 7654 | Not started yet
Feed Parser service in Python | Extraction | 7554 | Not started yet
Feed Parser service in Golang | Extraction | 7454 | Basic implementation
Feed Parser service in Vlang | Extraction | 7354 | Not started yet
Feed Parser service in Deno | Extraction | 7254 | Not started yet
Article Parser service in Node.js | Extraction | 7655 | Basic implementation
Article Parser service in Python | Extraction | 7555 | Not started yet
Article Parser service in Golang | Extraction | 7455 | Basic implementation
Article Parser service in Vlang | Extraction | 7355 | Not started yet
Article Parser service in Deno | Extraction | 7255 | Not started yet
Notification Pusher service in Node.js | Event | 7656| Not started yet
Notification Pusher service in Python | Event | 7556| Not started yet
Notification Pusher service in Golang | Event | 7456| Not started yet
Notification Pusher service in Vlang | Event | 7356| Not started yet
Notification Pusher service in Deno | Event | 7256| Not started yet
Email Sender service in Node.js | Event | 7657 | Not started yet
Email Sender service in Python | Event | 7557 | Not started yet
Email Sender service in Golang | Event | 7457 | Not started yet
Email Sender service in Vlang | Event | 7357 | Not started yet
Email Sender service in Deno | Event | 7257 | Not started yet
Image Store service in Node.js | File | 7658 | Not started yet
Image Store service in Python | File | 7558 | Not started yet
Image Store service in Golang | File | 7458 | Not started yet
Image Store service in Vlang | File | 7358 | Not started yet
Image Store service in Deno | File | 7258 | Not started yet
Video Store service in Node.js | File & Stream | 7659 | Not started yet
Video Store service in Python | File & Stream | 7559 | Not started yet
Video Store service in Golang | File & Stream | 7459 | Not started yet
Video Store service in Vlang | File & Stream | 7359 | Not started yet
Video Store service in Deno | File & Stream | 7259 | Not started yet
Face Detection service in Node.js | CV | 7660 | Not started yet
Face Detection service in Python | CV | 7560 | Not started yet
Image Classification service in Node.js | CV | 7661 | Not started yet
Image Classification service in Python | CV | 7561 | Not started yet
Named Entity Recognition service in Node.js | NLP | 7662 | Not started yet
Named Entity Recognition service in Python | NLP | 7562 | Not started yet
Text Classification service in Node.js | NLP | 7663 | Not started yet
Text Classification service in Python | NLP | 7563 | Not started yet
Text Classification service in Golang | NLP | 7463 | Not started yet
Sentiment Analysis service in Node.js | NLP | 7664 | Not started yet
Sentiment Analysis service in Python | NLP | 7564 | Not started yet
Sentiment Analysis service in Golang | NLP | 7464 | Not started yet


# Tech stacks

- Programming languages: [Node.js](https://nodejs.org/en/), [Deno](https://deno.land/), [Python](https://www.python.org/), [Golang](https://golang.org/), [Vlang](https://vlang.io/)
- Databases: MongoDB, Postgres, SQLite, Redis/KeyDB, InfluxDB
- Job queue: bull, celary, rqueue, etc
- Testing tools: Jest, pytest
- DevOps: Docker, Drone, nginx, Traefic, HAProxy
- Machine Learning: TensorFlow, PyTorch, spaCy, fasttext


And not only that, of course :)


# Contributions

If you would like to learn more about micro services, or a new programming language, or one of the above tech stacks, feel free to contribute.



To keep things consistent for others, please refer the next section.


# Rules and standards

### Naming convention

Each of service should be stored within a separate folder. These folders must be named in dash-case style by the format of {SERVICE NAME}-{LANGUAGE}, for examples:

- `article-parser-node`
- `video-store-deno`
- `feed-parser-py`
- `email-sender-go`
- `notification-pusher-v`

### Service.json file

Each of service must have a `service.json` file to declare name, version and some basic configs.


```json
{
  "name": "Feed Parser service in Go",
  "version": "1.0.0",
  "host": "0.0.0.0",
  "port": 7454
}
```

These values should be used to introduce the service at its starting time:

![](https://i.imgur.com/8yAeSNF.png)


### Dockerfile & docker-compose.yaml

All services must be able to containerized.

The images should be carefully selected. Good to use the minimal ones, or those are designed for microservice.

The containers should be configured to run within the same virtual network named `micro-net`, so please create it at first.


```bash
docker network create micro-net
```


### Functional Programming

It's recommended to apply Functional Programming style here.


### Coding convention

- Node.js, JavaScript, Deno: [ESLint recommended rules](https://eslint.org/docs/rules/) and [Google JavaScript Style guide](https://google.github.io/styleguide/jsguide.html)
- Python: PEP8
- Golang: *not defined yet*
- Vlang: *not defined yet*

### Output format

- JSON output format: [jsend](https://github.com/omniti-labs/jsend) and [Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)


# License

The MIT License (MIT)
