describe('Paystack.resolveCardBin()', () => {
  it('Successfully resolved card bin', (done) => {
    global.Paystack.resolveCardBin({
      apiKey: global.apiKey,
      bin: '539983'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
