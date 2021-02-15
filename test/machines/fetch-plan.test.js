describe('Paystack.fetchPlan()', () => {
  it('Successfully retrieved plan', (done) => {
    global.Paystack.fetchPlan({
      apiKey: global.apiKey,
      id_or_code: 'PLN_gx2wn530m0i3w3m'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
