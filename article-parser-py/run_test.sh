#!/bin/bash

poetry run flake8 ./ --exclude venv,build,dist --statistics
poetry run safety check --bare
poetry run pytest tests/init.py
