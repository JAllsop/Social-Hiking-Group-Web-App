'use strict'

import * as db from './db.js'

// standard query function for database
const dbQuery = async (sql) => {
    try {
      const pool = await db.pools
      const req = await pool.request().query(sql)
      return req.recordsets[0]
    } catch (err) {
      console.log(err)
    }
  }

  export async function getList(filter) {
    let sql = `SELECT ${filter} FROM dbo.GROUPS`
    return await dbQuery(sql)
  }
  