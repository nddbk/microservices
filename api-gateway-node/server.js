// server.js

const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const {info, error} = require('./utils/logger');

const {
  name,
  version,
  host,
  port,
  endpointMap,
} = require('./service.json');

const startAt = (new Date()).toUTCString();

const app = express();
app.disable('x-powered-by');

const onError = (err, req, res) => {
  error(`${req.method} ${req.path} --> ${String(err)}`);
  return res.status(500).json({
    status: 'error',
    error: 'Service Error',
    message: String(err),
  });
};

const onProxyReq = (proxyReq, req) => {
  info(`${req.method} ${req.path} --> Forwarding`);
};

app.get('/', (req, res) => {
  info(`${req.method} ${req.path} --> Default endpoint`);
  return res.json({
    service: name,
    version,
    startAt,
  });
});


Object.keys(endpointMap).forEach((key) => {
  const target = endpointMap[key];
  app.use(`/${key}`, createProxyMiddleware({target, onError, onProxyReq, logLevel: 'error'}));
  info(`API Gateway mapped endpoint from /${key} to ${target}/${key}`);
});


app.use((req, res) => {
  error(`${req.method} ${req.path} --> 404`);
  return res.status(404).json({
    status: 'error',
    error: '404 Not Found',
    message: `The endpoint \`${req.path}\` does not exist!`,
  });
});

app.use((err, req, res) => {
  error(`${req.METHOD} ${req.path} --> ${String(err)}`);
  return res.status(500).json({
    status: 'error',
    error: 'Internal Server Error',
    message: String(err),
  });
});

const onServerReady = () => {
  info(`${name} started at "http://${host}:${port}"`);
};

app.listen(port, host, onServerReady);
