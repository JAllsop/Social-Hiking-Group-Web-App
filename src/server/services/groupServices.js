'use strict'

import * as db from '../repositories/groupRepository.js'

export async function createGroup (group) {
  return await db.create(group)
}

export async function isGroupNameAvailable (groupName, callback) {
  const result = await db.get(groupName)
  if (result !== '') { callback(true) } else { callback(false) }
}

export async function getLast (callback) {
  const result = await db.getLast()
  if (result) callback(result)
}
