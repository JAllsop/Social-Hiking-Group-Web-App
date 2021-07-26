'use strict'

import * as db from './db.js'

export const dbQuery = async (sql) => {
    try {
      const pool = await db.pools
      const req = await pool.request().query(sql)
      return req.recordsets[0]
    } catch (err) {
      console.log(err)
    }
  }
