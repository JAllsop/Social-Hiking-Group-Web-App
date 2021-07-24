'use strict'

import * as db from '../repositories/groupRepository.js'

export async function getGroupList (filter,callback) {
    let result = await db.getList(filter)
    if(result !='') callback(result)
  }