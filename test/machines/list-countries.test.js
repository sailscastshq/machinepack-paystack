describe('Paystack.listCountries()', () => {
  it('Successfully retrieved countries', (done) => {
    global.Paystack.listCountries({
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
