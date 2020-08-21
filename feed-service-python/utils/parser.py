#!/usr/bin/env python3

import html

import feedparser
import aiohttp

from .stripTag import strip_tags


async def fetch_feed(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            raw_feed = await response.text()
            return feedparser.parse(raw_feed)


def get_val(ob, prop):
    return ob[prop] if prop in ob else None


def normalize_item(entry):
    description = get_val(entry, 'summary')
    if description:
        description = strip_tags(html.unescape(description))
    return {
        'title': html.unescape(get_val(entry, 'title')),
        'link': get_val(entry, 'link'),
        'description': description,
        'published': get_val(entry, 'published')
    }


def normalize(data):
    feed = data.feed
    published = get_val(feed, 'published')
    entries = [normalize_item(entry) for entry in data.entries]
    return {
        'title': get_val(feed, 'title'),
        'description': get_val(feed, 'description'),
        'link': feed.link,
        'published': published,
        'copyright': get_val(feed, 'rights'),
        'items': entries
    }


async def parse(url):
    result = await fetch_feed(url)
    if result.bozo == 1:
        return result.bozo_exception
    return normalize(result)
