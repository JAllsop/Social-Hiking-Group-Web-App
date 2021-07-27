'use strict'

const dbQuery = require('./dbQuery.js')

module.exports = {
  getList: async function getList (filter) {
    const sql = `SELECT ${filter} FROM dbo.GROUPS`
    return await dbQuery.dbQuery(sql)
  }
}
