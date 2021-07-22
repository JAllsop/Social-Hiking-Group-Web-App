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

export async function create(group) {
  let sql = 'INSERT INTO dbo.GROUPS (groupName,groupDescription)'
  sql += `VALUES ('${group.groupName}','${group.description}')`
  return await dbQuery(sql)
}