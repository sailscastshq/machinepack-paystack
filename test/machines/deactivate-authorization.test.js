describe('Paystack.deactivateAuthorization()', () => {
  it('Successfully hit deactivated Authorization endpoint', (done) => {
    global.Paystack.deactivateAuthorization({
      apiKey: global.apiKey,
      authorization_code: 'AUTH_72btv547'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to deactivate authorization with wrong API key', (done) => {
    global.Paystack.deactivateAuthorization({
      apiKey: 'wrong api key',
      authorization_code: 'AUTH_72btv547'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) {
        return done()
      }
    })
  })
})
