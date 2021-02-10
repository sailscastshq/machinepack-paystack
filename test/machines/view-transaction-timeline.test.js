const { getHeaders } = require('../../helpers/get-headers')
const { makeRequest } = require('../../helpers/make-request')

describe('Paystack.viewTransactionTimeline()', () => {
  it('Successfully fetch transaction timeline', (done) => {
    // create a transaction
    makeRequest('/transaction/initialize',
      {
        headers: getHeaders(global.apiKey)
      }).then(() => {
      // fetch the created transaction
      makeRequest('/transaction',
        {
          headers: getHeaders(global.apiKey)
        })
        .then((retrievedTransactions) => {
          // retrieve Transaction timeline
          global.Paystack.viewTransactionTimeline({
            apiKey: global.apiKey,
            id_or_reference: retrievedTransactions.data[0].id
          }).exec((error, response) => {
            if (error) return done(error)
            if (response) {
              if (response.status) {
                return done()
              }
            }
          })
        }).catch(error => {
          return done(error)
        })
    }).catch(error => {
      return done(error)
    })
  })

  it('Failed to fetch transaction timeline with invalid Transaction ID or reference', (done) => {
    global.Paystack.viewTransactionTimeline({
      apiKey: global.apiKey,
      id_or_reference: 123456
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) return done()
        return done(new Error(response.message))
      }
    })
  })
})
