'use strict'

const db = require('./db.js')

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

async function getDetails() {
  let sql = 'SELECT TOP (1) [groupName],[groupDescription],[generalLocation] FROM [dbo].[GROUPS]'
//  sql += `groupName='${group}'`
  return await dbQuery(sql)
  
}

module.exports = getDetails