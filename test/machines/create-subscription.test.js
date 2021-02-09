describe('Paystack.createSubscription()', () => {
  it('Successfully create a subscription', (done) => {
    global.Paystack.createSubscription({
      apiKey: global.apiKey,
      customer: 'customer2@email.com',
      plan: 'PLN_u0pyhde6eqtuedk'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
