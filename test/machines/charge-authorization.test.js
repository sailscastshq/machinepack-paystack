describe('Paystack.chargeAuthorization()', () => {
  it('Successfully call charge authorization endpoint', (done) => {
    global.Paystack.chargeAuthorization({
      apiKey: global.apiKey,
      authorization_code: 'AUTH_72btv547',
      email: 'customers@email.com',
      amount: 50000
    }).exec((error, _) => {
      if (error) return done(error)

      return done()
    })
  })

  it('Failed to charge authorization with wrong authorization_code', (done) => {
    global.Paystack.chargeAuthorization({
      apiKey: global.apiKey,
      authorization_code: 'AUTH_72btv547',
      email: 'customers@email.com',
      amount: 50000
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) return done()
        return done(new Error(response.message))
      }
    })
  })
})
