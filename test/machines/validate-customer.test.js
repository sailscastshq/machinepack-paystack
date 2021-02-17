const { getHeaders } = require('../../helpers/get-headers')
const { makeRequest } = require('../../helpers/make-request')

describe('Paystack.validateCustomer()', () => {
  it('Successfully validate customer', (done) => {
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
      global.Paystack.validateCustomer({
        apiKey: global.apiKey,
        customer_code: customer.data.customer_code,
        country: 'NG',
        type: 'bvn',
        value: '20012345667',
        first_name: 'Asta',
        last_name: 'Lavista'
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

  it('Failed to retrieve Splits with wrong API KEY', (done) => {
    global.Paystack.validateCustomer({
      apiKey: 'wrong or fake key',
      customer_code: 'CUS_xnxdt6s1zg1f4nx',
      country: 'NG',
      type: 'bvn',
      value: '20012345667',
      first_name: 'Asta',
      last_name: 'Lavista'
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
