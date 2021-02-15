describe('Paystack.listStates()', () => {
  it('Successfully retrieved states', (done) => {
    global.Paystack.listStates({
      apiKey: global.apiKey,
      country: 'CA'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('retrieves states without apiKey', (done) => {
    global.Paystack.listStates({
      country: 'CA'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
