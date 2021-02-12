const { getHeaders } = require('../../helpers/get-headers')
const { makeRequest } = require('../../helpers/make-request')

describe('Paystack.updateCustomer()', () => {
  it('Successfully update Customer\'s details', (done) => {
    makeRequest('/customer',
      {
        method: 'POST',
        headers: getHeaders(global.apiKey),
        body: JSON.stringify({
          email: 'customer@email.com',
          first_name: 'John',
          last_name: 'Doe'
        })
      }).then((customer) => {
      global.Paystack.updateCustomer({
        apiKey: global.apiKey,
        code: customer.data.customer_code,
        first_name: 'Friday'
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

  it('Failed to update Customers with wrong API KEY', (done) => {
    global.Paystack.updateCustomer({
      apiKey: 'wrong or fake key',
      code: 'CUS_xnxdt6s1zg1f4nx',
      first_name: 'Friday'
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
