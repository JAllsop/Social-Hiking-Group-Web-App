'use strict'

const db = require('../repositories/groupRepository.js')

module.exports =
{
  createGroup: async function createGroup (group) {
    return await db.create(group)
  },

  addToGroup: async function addToGroup (user, group) {
    return await db.addToGroup(user, group)
  },

  isGroupNameAvailable: async function isGroupNameAvailable (groupName, callback) {
    const result = await db.get(groupName)
    if (result.length === 0) { callback(false) } else { callback(true) }
  },

  getLast: async function getLast (callback) {
    const result = await db.getLast()
    if (result) callback(result)
  },
  getGroupList: async function getGroupList (callback) {
    const result = await db.getList()
    if (result.length !== 0) callback(result)
  }
}
