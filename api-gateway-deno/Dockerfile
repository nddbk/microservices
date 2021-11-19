FROM denoland/deno:alpine-1.16.2

RUN mkdir /root/.deno
RUN mkdir /app

WORKDIR /app
ADD . /app

RUN deno install -A --unstable --import-map=https://deno.land/x/trex/import_map.json -n trex --no-check https://deno.land/x/trex/cli.ts
RUN trex install
