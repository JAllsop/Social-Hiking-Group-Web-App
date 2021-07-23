'use strict'

import * as db from '../repositories/groupRepository.js'

export async function createGroup(group) {
  return await db.create(group)
}

export async function isGroupNameAvailable (group_name,callback) {
  let result = await db.get(group_name)
  if(result !='') callback(true)
  else callback(false)
}
