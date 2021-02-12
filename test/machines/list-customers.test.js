describe('Paystack.listCustomers()', () => {
  it('Successfully retrieved list of Customers without query params', (done) => {
    global.Paystack.listCustomers({
      apiKey: global.apiKey
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response.status) {
        return done()
      }
    })
  })

  it('Failed to retrieve Customers with wrong API KEY', (done) => {
    global.Paystack.listCustomers({
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
