const { getHeaders } = require('../../helpers/get-headers')
const { makeRequest } = require('../../helpers/make-request')

describe('Paystack.fetchCustomer()', () => {
  it('Successfully fetch Customer', (done) => {
    makeRequest('/customer',
      {
        method: 'POST',
        headers: getHeaders(global.apiKey),
        body: JSON.stringify({
          email: 'customer@email.com',
          first_name: 'John',
          last_name: 'Doe'
        })
      }).then((_) => {
      global.Paystack.fetchCustomer({
        apiKey: global.apiKey,
        email_or_code: 'customer@email.com'
      }).exec(function (error, response) {
        if (error) return done(error)
        if (response.status) {
          return done()
        }
      })
    }).catch(error => {
      return done(error)
    })
  })

  it('Failed to retrieve Customers with wrong API KEY', (done) => {
    global.Paystack.fetchCustomer({
      apiKey: 'wrong or fake key',
      id: 111
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
