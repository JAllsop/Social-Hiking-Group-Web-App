/* eslint-env jest */
import {jest} from '@jest/globals'

jest.setTimeout(10000)

const delay = ms => new Promise(res => setTimeout(res, ms))
import * as route from '../src/server/routes/groupRoutes.js'

describe('Placeholder', () => {
  test('test1', async () => {
    const result = await route.dummy()
    await delay(5000)
    expect(result).toBe(1)
  })
})
