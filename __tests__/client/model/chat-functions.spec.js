/* eslint-env jest */
const assert = require('assert')
const messages = require('../../../__mocks__/message-test-data')
const fetchMock = require('jest-fetch-mock')
const { retrieveGroupMessages, getUsername } = require('../../../src/client/model/chat-functions')
const beforeEach = require('@jest/globals').beforeEach

beforeEach(() => {
  fetchMock.resetMocks()
  fetchMock.doMock()
})

describe('gets chat related information', () => {
  test('Returns all the group messages using the group name (Jukes)', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([messages[2], messages[3]]))
    const requestedMessages = await retrieveGroupMessages('Jukes')
    const testMessages = JSON.stringify([messages[2], messages[3]])
    assert(requestedMessages, testMessages)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
  test('Returns a different set of messages when a different group name is used (Jimmies)', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([messages[0]]))
    const requestedMessages = await retrieveGroupMessages('Jimmies')
    const testMessages = JSON.stringify([messages[0]])
    assert(requestedMessages, testMessages)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
  test('Gets no messages when entering a group name with no saved messages (Easy Striders)', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{}]))
    const emptyMessageList = [{}]
    const requestedMessages = await retrieveGroupMessages('Easy Striders')
    assert(requestedMessages, emptyMessageList)
  })
  test('Gets Username for the user currently logged in', async () => {
    const username = await getUsername()
    const testUsername = 'sinomazi'
    assert(username, testUsername)
  })
})
