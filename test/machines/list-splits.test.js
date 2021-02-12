describe('Paystack.listSplits()', () => {
  it('Successfully retrieved list of Splits without query params', (done) => {
    global.Paystack.listSplits({
      apiKey: global.apiKey
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response.status) {
        return done()
      }
    })
  })

  it('Failed to retrieve Splits with wrong API KEY', (done) => {
    global.Paystack.listSplits({
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
