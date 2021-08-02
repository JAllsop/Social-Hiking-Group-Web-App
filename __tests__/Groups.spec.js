/* eslint-env jest */
//
// ******** Tests Group methods *******
//

// const request = require('supertest')
// const { app } = require('../src/app/app')

jest.setTimeout(10000)

const groupService = require('../src/server/services/groupServices')
const db = require('../src/server/repositories/groupRepository')

describe('Adding group to database', () => {
  test('Group is added to database', async () => {
    const testName = {
      groupName: 'Hikers A Champions',
      description: 'We hike around Johanesburg Parktown',
      location: 'Johannesburg Parktown North'

    }
    const result_1 = await db.get(testName.groupName)
    let result_2

    if (result_1.length === 0) { await groupService.createGroup(testName) } else {
      result_2 = await db.get(testName.groupName)
    }
    expect(result_2[0].groupName === testName.groupName)
  })
})

describe('Can check for existing group names', () => {
  test('Existing group names found in database', async () => {
    const testName = {
      groupName: 'Hikers A Champions',
      description: 'We hike around Johanesburg Parktown',
      location: 'Johannesburg Parktown North'

    }
    const result_1 = await db.get(testName.groupName)
    let result_2

    if (result_1.length === 0) { await groupService.createGroup(testName) } else {
      await groupService.isGroupNameAvailable(testName.groupName, function (result) {
        result_2 = result
      })
    }
    expect(result_2 === true)
  })

  test('Non-existing group names not found in database', async () => {
    const testName = {
      groupName: 'Hikers A Champions',
      description: 'We hike around Johanesburg Parktown',
      location: 'Johannesburg Parktown North'

    }
    const mockName = 'Hikers B Champions'
    const result_1 = await db.get(testName.groupName)
    let result_2

    if (result_1.length === 0) { await groupService.createGroup(testName.groupName) } else {
      await groupService.isGroupNameAvailable(mockName, function (result) {
        result_2 = result
      })
    }
    expect(result_2 === false)
  })
})
