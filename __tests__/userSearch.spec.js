/* eslint-env jest */

const dummy = require('../src/server/routes/userRoutes').dummy

describe('Placeholder', () => {
  test('Search text does not match any user', () => {
    expect(dummy()).toBe(1)
  })
})
