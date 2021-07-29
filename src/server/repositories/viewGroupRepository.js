'use strict'

const dbQuery = require('./dbQuery.js').dbQuery

module.exports = {

  // standard query function for database
  dbQuery: async (sql) => {
    try {
      const pool = await db.pools
      const req = await pool.request().query(sql)
      return req.recordsets[0]
    } catch (err) {
      console.log(err)
    }
  },

  getDetails: async () => {
    const sql = 'SELECT TOP (1) [groupName],[groupDescription],[generalLocation] FROM [dbo].[GROUPS]'
    //  sql += `groupName='${group}'`
    return await dbQuery(sql)
  }
}
