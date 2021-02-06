describe('Paystack.listRefunds()', () => {
  it('Successfully retrieved refunds', (done) => {
    global.Paystack.listRefunds({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      reference: 'x7g15k5iye',
      currency: 'NGN'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
