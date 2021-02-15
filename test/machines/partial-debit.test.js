describe('Paystack.partialDebit()', () => {
  it('Successfully  call partial debit endpoint', (done) => {
    global.Paystack.partialDebit({
      apiKey: global.apiKey,
      authorization_code: 'AUTH_72btv547',
      currency: 'NGN',
      amount: '20000',
      email: 'customer@email.com'
    }).exec(function (error, _) {
      if (error) return done(error)

      return done()
    })
  })

  it('Failed to do a valid partial debit with wrong API KEY', (done) => {
    global.Paystack.partialDebit({
      apiKey: 'wrong or fake key',
      authorization_code: 'AUTH_72btv547',
      currency: 'NGN',
      amount: '20000',
      email: 'customer@email.com'
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) {
          return done()
        }
      }
    })
  })
})
