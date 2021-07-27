'use strict'

const dbQuery = require('./dbQuery.js')

module.exports =
{
  create: async function create (group) {
    let sql = 'INSERT INTO dbo.GROUPS (groupName,groupDescription,generalLocation)'
    sql += `VALUES ('${group.groupName}','${group.description}','${group.location}')`
    return await dbQuery.dbQuery(sql)
  },

  get: async function get (group) {
    let sql = 'SELECT * FROM dbo.GROUPS WHERE '
    sql += `groupName='${group}'`
    return await dbQuery.dbQuery(sql)
  },

  getLast: async function getLast () {
    const sql = 'SELECT TOP (1) [groupName]  FROM [dbo].[GROUPS]'
    return await dbQuery.dbQuery(sql)
  }
}
