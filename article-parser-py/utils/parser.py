#!/usr/bin/env python3

import html

from newspaper import Article
import aiohttp


async def fetch_article(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            html = await response.text()
            article = Article(url)
            article.set_html(html)
            article.download_state = 2
            article.parse()
            return article


async def parse(url):
    data = await fetch_article(url)
    return {
        'title': html.unescape(data.title),
        'url': data.url,
        'text': data.text,
        'image': data.top_image,
        'images': list(data.images),
        'movies': list(data.movies),
        'authors': data.authors,
        'publish_date': str(data.publish_date)
    }
