describe('Paystack.listSubscriptions()', () => {
  it('Successfully retrieved subscriptions', (done) => {
    global.Paystack.listSubscriptions({
      apiKey: global.apiKey
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
