'use strict'

const db = require('../repositories/activityRepository')

module.exports = {
  get: async function get (username) {
    return await db.getActivities(username)
  }
}
