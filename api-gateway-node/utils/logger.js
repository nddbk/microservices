// utils/logger

const winston = require('winston')
const {
  isObject,
  isArray,
  toDateString
} = require('bellajs')

const { createLogger, transports, format } = winston
const { combine, timestamp, colorize, ms, printf } = format

const myFormat = printf(({ level, timestamp, message, ms }) => {
  const print = (msg) => {
    return isObject(msg) || isArray(msg) ? JSON.stringify(msg) : msg
  }
  const pattern = 'Y-m-d h:i:s'
  return `${toDateString(timestamp, pattern)} | ${level} | ${print(message)} | ${ms}`
})

const logger = createLogger({
  level: 'debug',
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        ms(),
        timestamp(),
        myFormat
      )
    })
  ]
})

module.exports = logger
