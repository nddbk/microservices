// server.js

const express = require('express')
const { extract } = require('article-parser')

const { info, error } = require('./utils/logger')
const isValidUrl = require('./utils/isValidUrl')

const {
  name,
  version,
  host,
  port
} = require('./service.json')

const { NODE_ENV = 'dev' } = process.env || {}

const startAt = (new Date()).toUTCString()

const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
  info(`${req.method} ${req.path} --> Default endpoint`)
  return res.json({
    service: name,
    version,
    startAt
  })
})

const getArticle = async (url) => {
  return !isValidUrl(url)
    ? (() => {
        return {
          status: 'error',
          error: 'Could not extract article from an invalid url',
          data: {}
        }
      })()
    : (async () => {
        const output = {
          status: 'success',
          error: null,
          data: {}
        }
        try {
          const article = await extract(url)
          output.data = article
        } catch (err) {
          error(err.message)
          output.status = 'error'
          output.error = err.message
        }
        return output
      })()
}

app.get('/article', async (req, res) => {
  const { url = '' } = req.query
  info(`GET /article?url=${url}`)
  const result = await getArticle(url)
  return res.json(result)
})

app.use((req, res) => {
  error(`${req.method} ${req.path} --> 404`)
  return res.status(404).json({
    status: 'error',
    error: '404 Not Found',
    message: `The endpoint \`${req.path}\` does not exist!`
  })
})

app.use((err, req, res) => {
  error(`${req.METHOD} ${req.path} --> ${String(err)}`)
  return res.status(500).json({
    status: 'error',
    error: 'Internal Server Error',
    message: String(err)
  })
})

const onServerReady = () => {
  info(`${name} started at "http://${host}:${port}"`)
}

if (NODE_ENV !== 'test') {
  app.listen(port, host, onServerReady)
}

module.exports = app
