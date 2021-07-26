'use strict'

// require('dotenv').config()
// const mssql = require('mssql')

import mssql from 'mssql'
import path from 'path'

const __dirname = path.resolve()

// require('dotenv').config({ path: path.resolve(__dirname, './.env') })

import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, './.env') })

const config = {
  server: 'eie-software-3.database.windows.net',
  database: 'Hiking',
  // Put login details in env. variables for security
  user: process.env.db_username,
  password: process.env.db_password,
  port: 1433,
  // Required for Azure
  options: {
    encrypt: true,
    enableArithAbort: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
}

// Get a mssql connection instance
let isConnected = true
let connectionError = null
const pools = new mssql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to DB')
    return pool
  })
  .catch(err => {
    // Handle errors
    isConnected = false
    connectionError = err
    console.log(err)
  })

  export {
    mssql as sql,
    pools as pools,
    isConnected as isConnected,
    connectionError as connectionError
  }