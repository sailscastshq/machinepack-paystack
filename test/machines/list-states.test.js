describe('Paystack.listStates()', () => {
  it('Successfully retrieved states', (done) => {
    global.Paystack.listStates({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      country: 'CA'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('retrieves states without apiKey', (done) => {
    global.Paystack.listStates({
      country: 'CA'
    }).exec(function (error, states) {
      if (error) return done(error)
      console.log(states)
      return done()
    })
  })
})
