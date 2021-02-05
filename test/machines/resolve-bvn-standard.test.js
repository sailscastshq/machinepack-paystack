describe('Paystack.resolveBvnStandard()', () => {
  it('Successfully resolved bvn', (done) => {
    global.Paystack.resolveBvnStandard({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      bvn: '00000000000'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
