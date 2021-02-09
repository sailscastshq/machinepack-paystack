describe('Paystack.listRefunds()', () => {
  it('Successfully retrieved refunds', (done) => {
    global.Paystack.listRefunds({
      apiKey: global.apiKey,
      reference: 'x7g15k5iye',
      currency: 'NGN'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
