describe('Paystack.enableSubscription()', () => {
  it('Successfully enabled a subscription', (done) => {
    global.Paystack.enableSubscription({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      code: 'SUB_vsyqdmlzble3uii',
      token: 'd7gofp6yppn3qz7'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
