'use strict'

import * as db from '../repositories/viewGroupRepository.js'

export async function getGroupDetails (callback) {
  let result = await db.getDetails()
  if(result !='') callback(result)
  //else callback(false)
}