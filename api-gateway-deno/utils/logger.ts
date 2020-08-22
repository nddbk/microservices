// utils / logger

import * as log from 'https://deno.land/std/log/mod.ts';

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler('DEBUG'),
  },
  loggers: {
    default: {
      level: 'DEBUG',
      handlers: ['console'],
    },
  },
});


export default log.getLogger();
