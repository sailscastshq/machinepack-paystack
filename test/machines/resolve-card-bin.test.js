describe('Paystack.resolveCardBin()', () => {
  it('Successfully resolved card bin', (done) => {
    global.Paystack.resolveCardBin({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      bin: '539983'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
