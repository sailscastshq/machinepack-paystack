describe('Paystack.fetchDispute()', () => {
  it('Can successfully retrieve dispute', (done) => {
    global.Paystack.fetchDispute({
      apiKey: global.apiKey,
      id: 1
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
