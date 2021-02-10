describe('Paystack.exportTransactions()', () => {
  it('Successfully  export transactions without query params', (done) => {
    global.Paystack.exportTransactions({
      apiKey: global.apiKey
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully  export transactions  with perPage query param set', (done) => {
    global.Paystack.exportTransactions({
      apiKey: global.apiKey,
      perPage: 2
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully  export transactions  with page query param set', (done) => {
    global.Paystack.exportTransactions({
      apiKey: global.apiKey,
      page: 2
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('failed to  export transactions  with wrong apiKey', (done) => {
    global.Paystack.exportTransactions({
      apiKey: 'absolutely_FAKEY!!'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
