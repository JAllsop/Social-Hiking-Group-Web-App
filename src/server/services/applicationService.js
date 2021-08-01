'use strict'

const db = require('../repositories/applicationRepository')

module.exports = {
  addToGroup: async function addToGroup (user, group) {
    return await db.addToGroup(user, group)
  }
}
