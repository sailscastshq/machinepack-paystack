describe('Paystack.resolveAccountNumber()', () => {
  it('Successfully resolved account number', (done) => {
    global.Paystack.resolveAccountNumber({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      account_number: '3094540263',
      bank_code: '011'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('fails to resolve account number with wrong apiKey', (done) => {
    global.Paystack.resolveAccountNumber({
      apiKey: 'absolutely_FAKEY!!',
      account_number: '3094540263',
      bank_code: '011'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
