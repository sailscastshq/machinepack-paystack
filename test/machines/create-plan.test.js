const Paystack = require('../../')

if (!process.env.PAYSTACK_API_KEY_FOR_TESTS) {
  throw new Error('In order to run tests, the `PAYSTACK_API_KEY_FOR_TESTS` environment variable must be set!');
}

describe('Paystack.createPlan()', () => {
  it('Successfully create a plan', (done) => {
    Paystack.createPlan({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      name: 'Test Plan',
      amount: 100,
      interval: 'monthly'
    }).exec(function(error, createdPlan) {
      if (error) return done(error)
      return done(createdPlan)
    })
  })
})