/* eslint-env jest */

const request = require('supertest')
const { app } = require('../../../src/app/app')

describe('Logging route requests', () => {
  test('Retireve Application Logs', async () => {
    const response = await request(app)
      .get('logs/api/get-logs')
      .type('json')

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(JSON.stringify({}))
  })
})
