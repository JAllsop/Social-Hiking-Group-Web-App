'use strict'

const db = require('./db')

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

// public methods for users database access
module.exports = {
  getAllUsers: async () => {
    const sql = 'SELECT * FROM dbo.USERS'
    return await dbQuery(sql)
  }
}
