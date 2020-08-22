// app

import { opine } from 'https://deno.land/x/opine@0.21.2/mod.ts';
import { proxy } from "https://deno.land/x/opineHttpProxy@2.1.0/mod.ts";

import logger from './utils/logger.ts';

const service = await Deno.readTextFile('./service.json');

const {
  name,
  version,
  host,
  port,
  endpointMap = {},
} = JSON.parse(service);

const startAt = (new Date()).toUTCString();

const app = opine();

app.get('/', (req: any, res: any) => {
  logger.info(`${req.method} ${req.path} --> Default endpoint`);
  return res.json({
    service: name,
    version,
    startAt,
  });
});

Object.keys(endpointMap).forEach((key) => {
  const target = endpointMap[key];
  app.use(`/${key}`, proxy(`${target}/${key}`));
  logger.info(`API Gateway mapped endpoint from /${key} to ${target}/${key}`);
});

app.use((req: any, res: any) => {
  logger.error(`${req.method} ${req.path} --> 404`);
  return res.setStatus(404).json({
    status: 'error',
    error: '404 Not Found',
    message: `The endpoint \`${req.path}\` does not exist!`,
  });
});

app.use((err: any, req: any, res: any) => {
  logger.error(`${req.METHOD} ${req.path} --> ${String(err)}`);
  return res.setStatus(500).json({
    status: 'error',
    error: 'Internal Server Error',
    message: String(err),
  });
});

const onServerReady = () => {
  logger.info(`${name} started at "http://${host}:${port}"`);
};

app.listen({hostname: host, port}, onServerReady);
