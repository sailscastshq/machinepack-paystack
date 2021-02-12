const { getHeaders } = require('../../helpers/get-headers')
const { makeRequest } = require('../../helpers/make-request')

describe('Paystack.whitelistOrBlacklistCustomer()', () => {
  it('Successfully Blacklist a customer', (done) => {
    makeRequest('/customer',
      {
        method: 'POST',
        headers: getHeaders(global.apiKey),
        body: JSON.stringify({
          email: 'customer@email.com',
          first_name: 'John',
          last_name: 'Doe'
        })
      })
      .then((_) => {
        global.Paystack.whitelistOrBlacklistCustomer({
          apiKey: global.apiKey,
          customer: 'customer@email.com',
          risk_action: 'deny'
        }).exec((error, response) => {
          if (error) return done(error)

          if (response.status) {
            return done()
          }
        })
      }).catch(error => {
        return done(error)
      })
  })

  it('Failed to fetch transaction timeline with invalid API KEY', (done) => {
    global.Paystack.whitelistOrBlacklistCustomer({
      apiKey: 'invalid key',
      customer: 'customer2@email.com',
      risk_action: 'allow'
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) return done()
        return done(new Error(response.message))
      }
    })
  })
})
