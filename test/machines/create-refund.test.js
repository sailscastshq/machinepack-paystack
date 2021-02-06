describe('Paystack.createRefund()', () => {
  it('Successfully create a refund', (done) => {
    global.Paystack.createRefund({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      transaction: 'x7g15k5iye'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
