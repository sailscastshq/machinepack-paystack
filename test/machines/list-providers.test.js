describe('Paystack.listProviders()', () => {
  it('Successfully retrieved providers without query params', (done) => {
    global.Paystack.listProviders({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved providers without apiKey', (done) => {
    global.Paystack.listProviders({
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved providers that allow bank transfer', (done) => {
    global.Paystack.listProviders({
      pay_with_bank_transfer: true
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
