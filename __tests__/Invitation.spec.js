/* eslint-env jest */
//
// ******** Tests Group methods *******
//

// const request = require('supertest')
// const { app } = require('../src/app/app')

jest.setTimeout(10000)

const groupService = require('../src/server/services/groupServices')
const db = require('../src/server/repositories/groupRepository')

const invitationService = require('../src/server/services/inviteServices')
const invit_db = require('../src/server/repositories/invitationRepository')


describe('Invitation is sent/logged for sending', () => {
  test('Invite logged into database for receival by invitee', async () => {
    const testInvitation = {
      username: 'kaMbokazi',
      groupname: 'Hikers A Champions'

    }

    // Getting current user messages
    let result_1
    await invitationService.getMessages(testInvitation.username, function (result) {
      result_1 = result
    })
    // Creating new Invite
    await groupService.createInvitation(testInvitation.username, testInvitation.groupname)

    let result_2
    // Checking if there is  new message for user
    await invitationService.getMessages(testInvitation.username, function (result) {
      result_2 = result
    })
    expect(result_2.length === result_1.length + 1)
  })
})

describe('Invitation is deleted upon response', () => {
  test('Invite is deleted after being responded to by the invitee', async () => {
    const testInvitation = {
      username: 'kaMbokazi',
      groupname: 'Hikers A Champions'

    }

    // Getting current user messages
    let result_1
    await invitationService.getMessages(testInvitation.username, function (result) {
      result_1 = result
    })

    // Get one group id to respond to
    const group_id = result_1[0].ID

    // Respond to one Invite
    await invitationService.sendResponse(group_id)

    // Checking if message got deleted
    await invitationService.getMessages(testInvitation.username, function (result) {
      result_2 = result
    })
    expect(result_2.length === result_1.length - 1)
  })
})
