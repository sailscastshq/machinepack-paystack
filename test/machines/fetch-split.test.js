describe('Paystack.fetchSplit()', () => {
  it('Successfully hit fetch Split endpoint', (done) => {
    global.Paystack.fetchSplit({
      apiKey: global.apiKey,
      id: 111
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to retrieve Splits with wrong API KEY', (done) => {
    global.Paystack.fetchSplit({
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
