'use strict'

const db = require('../repositories/groupRepository.js')

module.exports =
{
  createGroup: async function createGroup (group) {
    return await db.create(group)
  },

  isGroupNameAvailable: async function isGroupNameAvailable (groupName, callback) {
    const result = await db.get(groupName)
    if (result !== '') { callback(true) } else { callback(false) }
  },

  getLast: async function getLast (callback) {
    const result = await db.getLast()
    if (result) callback(result)
  }
}
