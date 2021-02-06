describe('Paystack.listSubscriptions()', () => {
  it('Successfully retrieved subscriptions', (done) => {
    global.Paystack.listSubscriptions({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
