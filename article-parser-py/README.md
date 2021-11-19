# Article Parser service in Python

## Requirements

- Python >= 3.6

## Setup

```bash
git clone https://github.com/ndaidong/microservices.git
cd microservices/article-parser-py
docker-compose up

# or run directly with Python
poetry install
poetry run python3 server.py
```

Running scripts directly requires [poetry](https://python-poetry.org/).


## APIs

| Method | Endpoint  |
|--------|---------- |
| GET | http://0.0.0.0:7451/article?url={ARTICLE_URL} |


## Test

Before running test, please close other instances of `server.py` to avoid port confliction.
```bash
# install dependencies if not yet
# poetry install

./run_test.sh
```
