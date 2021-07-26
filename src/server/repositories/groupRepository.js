'use strict'

import * as dbQuery from './dbQuery.js'

  export async function getList(filter) {
    let sql = `SELECT ${filter} FROM dbo.GROUPS`
    return await dbQuery.dbQuery(sql)
  }
  