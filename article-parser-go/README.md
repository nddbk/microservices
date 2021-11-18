# ArticleParser service in Go

## Requirements

- Golang >= 1.14

## Setup

```bash
git clone https://github.com/ndaidong/microservices.git
cd  microservices/article-service-go
go run main.go

# build
go build

# run with docker
docker-compose up
```

## APIs

| Method | Endpoint  |
|--------|---------- |
| GET | http://0.0.0.0:7455/article?url={ARTICLE_URL} |



## Test

```bash
go test -v
```
