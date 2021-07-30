'use strict'

const dbQuery = require('./dbQuery.js').dbQuery

module.exports = {
  getDetails: async (groupName) => {
    let sql = `SELECT * FROM [dbo].[GROUPS] WHERE groupName= '${groupName}'`
    const result = await dbQuery(sql)
    sql = `SELECT username FROM [dbo].[USERGROUPS] WHERE groupName = '${groupName}'`
    result.push(await dbQuery(sql))
    return result
  }
}
