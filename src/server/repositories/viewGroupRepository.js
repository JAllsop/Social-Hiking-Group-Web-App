'use strict'

const dbQuery = require('./dbQuery.js').dbQuery

module.exports = {
  getDetails: async (groupName) => {
    const sql = `SELECT * FROM [dbo].[GROUPS] WHERE groupName= '${groupName}'`
    return await dbQuery(sql)
  }
}
