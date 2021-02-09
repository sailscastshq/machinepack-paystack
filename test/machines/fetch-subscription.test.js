describe('Paystack.fetchSubscription()', () => {
  it('Successfully retrieved subscription', (done) => {
    global.Paystack.fetchSubscription({
      apiKey: global.apiKey,
      id_or_code: 2334
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
