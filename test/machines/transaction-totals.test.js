describe('Paystack.transactionTotals()', () => {
  it('Successfully retrieved transaction Totals without query params', (done) => {
    global.Paystack.transactionTotals({
      apiKey: global.apiKey
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved transaction Totals with perPage query param set', (done) => {
    global.Paystack.transactionTotals({
      apiKey: global.apiKey,
      perPage: 2
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved transaction Totals with page query param set', (done) => {
    global.Paystack.transactionTotals({
      apiKey: global.apiKey,
      page: 2
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('failed to retrieved transaction Totals with wrong apiKey', (done) => {
    global.Paystack.transactionTotals({
      apiKey: 'absolutely_FAKEY!!'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
