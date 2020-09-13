#!/usr/bin/env python3

from os import getenv
from datetime import datetime
import json

from starlette.applications import Starlette
from starlette.responses import JSONResponse
from starlette.routing import Route
import uvicorn

from utils.logger import info
from utils.parser import parse

ENV = getenv('ENV', 'dev')

service = dict(
    start_at=datetime.utcnow().isoformat()
)


with open('service.json', 'r') as fs:
    data = json.load(fs)
    service.update(data)


async def welcome(request):
    info('GET /')
    return JSONResponse({
        'service': service['name'],
        'version': service['version'],
        'startAt': service['start_at'],
    })


async def parseArticle(request):
    info('GET /article')
    url = request.query_params['url']
    info(f'Start parsing article `{url}`...')
    success = f'Finish parsing article from `{url}`'
    result = {
        'status': 'success',
        'message': success,
        'error': None,
        'data': None,
    }
    try:
        article = await parse(url)
        result['data'] = article
    except Exception as err:
        message = f'Error while parsing feed from `{url}`'
        result['status'] = 'error'
        result['error'] = str(err)
        result['message'] = message
        pass
    info(success)
    return JSONResponse(result)


def on_start():
    name = service['name']
    host = service['host']
    port = service['port']
    info(f'`{name}` started at http://{host}:{port}')


async def not_found(request, exc):
    path = request.url.path
    status_code = exc.status_code
    return JSONResponse(dict(
        message=f'Oops! Endpoint "{path}" leads to nowhere',
        status=status_code
    ), status_code=status_code)


async def server_error(request, exc):
    status_code = exc.status_code
    return JSONResponse(dict(
        message='Something went wrong, please try again later',
        status=status_code
    ), status_code=status_code)

exception_handlers = {
    404: not_found,
    500: server_error
}


routes = [
    Route('/', endpoint=welcome, methods=['GET', 'POST']),
    Route('/article', endpoint=parseArticle, methods=['GET']),
]


app = Starlette(
    debug=False if ENV == 'production' else True,
    routes=routes,
    on_startup=[on_start],
    exception_handlers=exception_handlers,
)


if __name__ == '__main__':
    uvicorn.run(
        app,
        host=service['host'],
        port=service['port']
    )
