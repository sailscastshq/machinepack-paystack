describe('Paystack.createDedicatedAccounts()', () => {
  it('Successfully hit create dedicated accounts endpoint', (done) => {
    global.Paystack.createDedicatedAccounts({
      apiKey: global.apiKey,
      customer: '481193',
      preferred_bank: 'wema-bank'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to create dedicated accounts with wrong API key', (done) => {
    global.Paystack.createDedicatedAccounts({
      apiKey: 'wrong api key',
      customer: '481193',
      preferred_bank: 'wema-bank'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) {
        return done()
      }
    })
  })
})
