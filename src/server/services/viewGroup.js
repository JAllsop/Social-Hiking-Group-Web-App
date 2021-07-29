'use strict'

const db = require('../repositories/viewGroupRepository.js')

module.exports = {
  getGroupDetails: async function getGroupDetails (callback) {
    const result = await db.getDetails()
    if (result != '') callback(result)
  }
}
