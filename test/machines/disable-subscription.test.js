describe('Paystack.disableSubscription()', () => {
  it('Successfully disabled a subscription', (done) => {
    global.Paystack.disableSubscription({
      apiKey: global.apiKey,
      code: 'SUB_vsyqdmlzble3uii',
      token: 'd7gofp6yppn3qz7'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
