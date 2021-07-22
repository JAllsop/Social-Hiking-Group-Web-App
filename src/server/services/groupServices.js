'use strict'

import * as db from '../repositories/groupRepository.js'

export async function createGroup(group) {
  return await db.create(group)
}

