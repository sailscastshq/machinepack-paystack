describe('Paystack.verifyTransaction()', () => {
  it('Successfully Verify Transaction', (done) => {
    const apiKey = process.env.PAYSTACK_API_KEY_FOR_TESTS
    // create a brand new transaction
    global.Paystack.initializeTransaction({
      apiKey: apiKey,
      email: 'customer@email.com',
      amount: '20000'
    }).exec(function (error, response) {
      if (error) return done(error)
      const refId = response.data.reference

      global.Paystack.verifyTransaction({
        apiKey: apiKey,
        reference: refId
      }).exec((error, response) => {
        if (error) return done(error)

        if (response) {
          if (response.status) return done()
          return done(new Error(response.message))
        }
      })
    })
  })

  it('Failed to verify transaction with wrong reference Id', (done) => {
    const wrongRef = 'wrong_ref_12'
    global.Paystack.verifyTransaction({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      reference: wrongRef
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) return done()
        return done(new Error(response.message))
      }
    })
  })
})
