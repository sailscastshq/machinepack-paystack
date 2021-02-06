describe('Paystack.createSubscription()', () => {
  it('Successfully create a subscription', (done) => {
    global.Paystack.createSubscription({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      customer: 'customer2@email.com',
      plan: 'PLN_u0pyhde6eqtuedk'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
