#!/usr/bin/env python3

from trafilatura import fetch_url, bare_extraction


async def parse(url):
    downloaded = fetch_url(url)
    result = bare_extraction(
        downloaded,
        include_comments=False,
        no_fallback=True
    )
    return {
        'url': result.url,
        'title': result.title,
        'description': result.description,
        'text': result.text,
        'author': result.author,
        'publish_date': str(result.date)
    }
