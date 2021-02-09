describe('Paystack.enableSubscription()', () => {
  it('Successfully enabled a subscription', (done) => {
    global.Paystack.enableSubscription({
      apiKey: global.apiKey,
      code: 'SUB_vsyqdmlzble3uii',
      token: 'd7gofp6yppn3qz7'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
