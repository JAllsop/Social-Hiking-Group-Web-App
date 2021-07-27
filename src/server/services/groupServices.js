'use strict'

const db = require('../repositories/groupRepository.js')

module.exports = {
  getGroupList: async function getGroupList (filter, callback) {
    const result = await db.getList(filter)
    if (result !== '') callback(result)
  }
}
