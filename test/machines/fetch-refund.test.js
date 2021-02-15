describe('Paystack.fetchRefund()', () => {
  it('Successfully retrieved refund', (done) => {
    global.Paystack.fetchRefund({
      apiKey: global.apiKey,
      reference: 'x7g15k5iye'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
