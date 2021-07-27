'use strict'

const db = require('../repositories/viewGroupRepository.js')

async function getGroupDetails (callback) {
  let result = await db.getDetails()
  if(result !='') callback(result)
  
}

module.exports = getGroupDetails