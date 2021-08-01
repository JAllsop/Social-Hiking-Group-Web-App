'use strict'

const dbQuery = require('./dbQuery').dbQuery

// public methods for users database access
module.exports = {
  addToGroup: async function addToGroup (username, group) {
    let sql = 'INSERT INTO [dbo].[GROUPAPPLICATIONS] (APPLICANT, GroupID, Applicationstatus)'
    sql += `VALUES ('${username}','${group}','0')`
    console.log(`${username} requested to join ${group}`)
    await dbQuery(sql)
  }

}
