#!/usr/bin/env python3

import sys
from os import path

from starlette.testclient import TestClient

sys.path.append(path.abspath(
    path.join(path.dirname(__file__), path.pardir)
))

from server import app  # noqa


def test_welcome():
    client = TestClient(app)
    response = client.get('/')
    assert response.status_code == 200


def test_404():
    client = TestClient(app)
    response = client.get('/somewhere')
    assert response.status_code == 404
