describe('Paystack.updateDispute()', () => {
  it('Can successfully update a dispute', (done) => {
    global.Paystack.updateDispute({
      apiKey: global.apiKey,
      id: 1,
      refund_amount: 100
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
