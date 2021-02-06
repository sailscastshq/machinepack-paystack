describe('Paystack.fetchRefund()', () => {
  it('Successfully retrieved refund', (done) => {
    global.Paystack.fetchRefund({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      reference: 'x7g15k5iye'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
