describe('Paystack.resolveBvnPremium()', () => {
  it('Successfully resolved bvn', (done) => {
    global.Paystack.resolveBvnPremium({
      apiKey: global.apiKey,
      bvn: '00000000000'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
