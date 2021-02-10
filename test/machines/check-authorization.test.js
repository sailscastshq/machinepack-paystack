describe('Paystack.checkAuthorization()', () => {
  it('Successfully call check authorization endpoint', (done) => {
    global.Paystack.checkAuthorization({
      apiKey: global.apiKey,
      authorization_code: 'AUTH_72btv547',
      email: 'customers@email.com',
      amount: 50000
    }).exec((error, _) => {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to check authorization with wrong authorization_code and email', (done) => {
    global.Paystack.checkAuthorization({
      apiKey: global.apiKey,
      authorization_code: 'wrong authorization_code',
      email: 'wrongcustomers@email.com',
      amount: 20000
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) return done()
        return done(new Error(response.message))
      }
    })
  })
})
