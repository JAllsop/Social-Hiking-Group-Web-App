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
  },
  addToInvites: async function addToInvites (username, groupname) {
    return await db.addToInvites(username, groupname)
  },
  createInvitation: async function createInvitation (username, groupname) {
    return await db.createInvitation(username, groupname)
  }
  // ,
  // checkUser: async function checkUser (username, callback) {
  //   const result = await db.checkUser(username)
  //   if (result.length === 0) { callback(false) } else { callback(true) } // false - Not in group
  // }

}
