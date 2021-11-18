#!/usr/bin/env python3

from trafilatura import fetch_url, bare_extraction


async def parse(url):
    downloaded = fetch_url(url)
    result = bare_extraction(
        downloaded,
        url=url,
        include_comments=False,
        include_formatting=True,
        include_images=True,
        include_links=True,
        include_tables=True,
    )
    return {
        'url': result['url'],
        'title': result['title'],
        'description': result['description'],
        'text': result['text'],
        'author': result.get('author', ''),
        'publish_date': str(result['date'])
    }
