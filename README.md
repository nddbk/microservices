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
API Gateway in Node.js | Routing | 7652 |  Implementing
API Gateway in Python | Routing | 7552 |  Not started yet
API Gateway in Golang | Routing | 7452 |  Not started yet
API Gateway in Vlang | Routing | 7352 |  Not started yet
API Gateway in Deno | Routing | 7252 |  Implementing
Authentication/Authorization service in Node.js | Security | 7653 | Not started yet
Authentication/Authorization service in Python | Security | 7553 | Not started yet
Authentication/Authorization service in Golang | Security | 7453 | Not started yet
Authentication/Authorization service in Vlang | Security | 7353 | Not started yet
Authentication/Authorization service in Deno | Security | 7253 | Not started yet
FeedParser service in Node.js | Regular | 7654 | Not started yet
FeedParser service in Python | Regular | 7554 | Not started yet
FeedParser service in Golang | Regular | 7454 | Basic implementation
FeedParser service in Vlang | Regular | 7354 | Not started yet
FeedParser service in Deno | Regular | 7254 | Not started yet
ArticleParser service in Node.js | Regular | 7655 | Not started yet
ArticleParser service in Python | Regular | 7555 | Not started yet
ArticleParser service in Golang | Regular | 7455 | Basic implementation
ArticleParser service in Vlang | Regular | 7355 | Not started yet
ArticleParser service in Deno | Regular | 7255 | Not started yet
Notification service in Node.js | Regular | 7656| Not started yet
Notification service in Python | Regular | 7556| Not started yet
Notification service in Golang | Regular | 7456| Not started yet
Notification service in Vlang | Regular | 7356| Not started yet
Notification service in Deno | Regular | 7256| Not started yet
Email service in Node.js | Regular | 7657 | Not started yet
Email service in Python | Regular | 7557 | Not started yet
Email service in Golang | Regular | 7457 | Not started yet
Email service in Vlang | Regular | 7357 | Not started yet
Email service in Deno | Regular | 7257 | Not started yet
Image Store service in Node.js | Regular | 7658 | Not started yet
Image Store service in Python | Regular | 7558 | Not started yet
Image Store service in Golang | Regular | 7458 | Not started yet
Image Store service in Vlang | Regular | 7358 | Not started yet
Image Store service in Deno | Regular | 7258 | Not started yet
Video Upload & Stream service in Node.js | Regular | 7659 | Not started yet
Video Upload & Stream service in Python | Regular | 7559 | Not started yet
Video Upload & Stream service in Golang | Regular | 7459 | Not started yet
Video Upload & Stream service in Vlang | Regular | 7359 | Not started yet
Video Upload & Stream service in Deno | Regular | 7259 | Not started yet
Face Detection service in Node.js | CV | 7660 | Not started yet
Face Detection service in Python | CV | 7560 | Not started yet
Image Classification service in Node.js | CV | 7661 | Not started yet
Image Classification service in Python | CV | 7561 | Not started yet
Named Entity Recognition service in Node.js | NLP | 7662 | Not started yet
Named Entity Recognition service in Python | NLP | 7562 | Not started yet
Text Classification service in Node.js | NLP | 7663 | Not started yet
Text Classification service in Python | NLP | 7563 | Not started yet
Text Classification service in Golang | NLP | 7563 | Not started yet
Sentiment Analysis service in Node.js | NLP | 7664 | Not started yet
Sentiment Analysis service in Python | NLP | 7564 | Not started yet
Sentiment Analysis service in Golang | NLP | 7564 | Not started yet


# Tech stacks

- Programming languages: Node.js, Deno, Python, Golang, Vlang
- Databases: MongoDB, Postgres, SQLite, Redis/KeyDB, InfluxDB
- Job queue: bull, celary, rqueue
- Testing tools: Jest, pytest
- DevOps: Docker, Drone, nginx, Traefic, HAProxy
- Machine Learning: TensorFlow, PyTorch, spaCy, fasttext

And more.


# Standards

- Node.js, JavaScript, Deno: [ESLint recommended rules](https://eslint.org/docs/rules/) and [Google JavaScript Style guide](https://google.github.io/styleguide/jsguide.html)
- Python: PEP8
- Golang:
- Vlang:
- JSON output format: [jsend](https://github.com/omniti-labs/jsend) and [Google JSON Style Guide](https://google.github.io/styleguide/jsoncstyleguide.xml)

# License

The MIT License (MIT)
