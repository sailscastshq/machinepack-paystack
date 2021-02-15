require('dotenv').config()
exports.mochaHooks = {
  beforeAll (done) {
    if (!process.env.PAYSTACK_API_KEY_FOR_TESTS) {
      throw new Error('In order to run tests, the `PAYSTACK_API_KEY_FOR_TESTS` environment variable must be set!')
    }
    global.apiKey = process.env.PAYSTACK_API_KEY_FOR_TESTS
    global.Paystack = require('../')
    done()
  }
}
