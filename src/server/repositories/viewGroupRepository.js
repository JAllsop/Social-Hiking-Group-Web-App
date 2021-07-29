'use strict'

const dbQuery = require('./dbQuery.js').dbQuery

module.exports = {
  getDetails: async () => {
    const sql = 'SELECT TOP (1) [groupName],[groupDescription],[generalLocation] FROM [dbo].[GROUPS]'
    //  sql += `groupName='${group}'`
    return await dbQuery(sql)
  }
}
