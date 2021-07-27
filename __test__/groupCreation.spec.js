/* eslint-env jest */

const delay = ms => new Promise(res => setTimeout(res, ms))
const { router, dummy } = require('../src/server/routes/groupRoutes.js')

jest.setTimeout(10000)

describe('Placeholder', () => {
  test('test1', async () => {
    const result = await dummy()
    await delay(5000)
    expect(result).toBe(1)
  })
})
