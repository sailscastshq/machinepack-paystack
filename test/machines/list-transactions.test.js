describe('Paystack.listTransactions()', () => {
  it('Successfully retrieved list of Transactions without query params', (done) => {
    global.Paystack.listTransactions({
      apiKey: global.apiKey
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status) {
          return done()
        }
      }
    })
  })

  it('Failed to retrieve Transactions with wrong API KEY', (done) => {
    global.Paystack.listTransactions({
      apiKey: 'wrong or fake key'
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
