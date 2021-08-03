'use strict'

const db = require('../repositories/viewGroupRepository.js')

module.exports = {
  getGroupDetails: async function getGroupDetails (groupName) {
    const result = await db.getDetails(groupName)
    if (result !== '') { return result } else { return [{}] }
  }
}
