#!/usr/bin/env python3

__author__ = 'Dong Nguyen'
__email__ = 'dongnd@greenglobal.vn'

import logging

LOG_MESSAGE_FORMAT = logging.Formatter('%(levelname)s:%(message)s')

stream_handler = logging.StreamHandler()
stream_handler.setFormatter(LOG_MESSAGE_FORMAT)

logger = logging.getLogger()
logger.propagate = False
logger.handlers.clear()
logger.addHandler(stream_handler)

logger.setLevel(logging.DEBUG)


def normalize(args=[]):
    arr = list(map(lambda x: str(x).strip(), args))
    return ' '.join(arr)


def debug(*args):
    msg = normalize(args)
    return logger.debug(msg)


def info(*args):
    msg = normalize(args)
    return logger.info(msg)


def error(*args):
    msg = normalize(args)
    return logger.error(msg, exc_info=True)


def warning(*args):
    msg = normalize(args)
    return logger.warning(msg, exc_info=True)


def critical(*args):
    msg = normalize(args)
    return logger.critical(msg, exc_info=True)
