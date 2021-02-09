describe('Paystack.createRefund()', () => {
  it('Successfully create a refund', (done) => {
    global.Paystack.createRefund({
      apiKey: global.apiKey,
      transaction: 'x7g15k5iye'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
