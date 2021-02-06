describe('Paystack.verifyBvnMatch()', () => {
  it('Successfully verified bvn match', (done) => {
    global.Paystack.verifyBvnMatch({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      account_number: '0000000000',
      bvn: '00000000000',
      bank_code: '011'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
