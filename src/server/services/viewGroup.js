'use strict'

const db = require('../repositories/viewGroupRepository.js')

module.exports = {
  getGroupDetails: async function getGroupDetails (callback, groupName) {
    const result = await db.getDetails(groupName)
    if (result != '') callback(result)
  }
}
