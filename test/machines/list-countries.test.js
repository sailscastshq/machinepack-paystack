describe('Paystack.listCountries()', () => {
  it.only('Successfully retrieved countries', (done) => {
    global.Paystack.listCountries({
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
