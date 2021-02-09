describe('Paystack.listPlans()', () => {
  it('Successfully retrieved plans without query params', (done) => {
    global.Paystack.listPlans({
      apiKey: global.apiKey
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved plans with perPage query param set', (done) => {
    global.Paystack.listPlans({
      apiKey: global.apiKey,
      perPage: 2
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved plans with page query param set', (done) => {
    global.Paystack.listPlans({
      apiKey: global.apiKey,
      page: 2
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved plans with amount query param set', (done) => {
    global.Paystack.listPlans({
      apiKey: global.apiKey,
      amount: 100
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved plans with interval query param set', (done) => {
    global.Paystack.listPlans({
      apiKey: global.apiKey,
      interval: 'monthly'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully retrieved plans with all query params set', (done) => {
    global.Paystack.listPlans({
      apiKey: global.apiKey,
      perPage: 2,
      page: 2,
      amount: 100,
      interval: 'monthly'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('failed to retrieved plans with wrong apiKey', (done) => {
    global.Paystack.listPlans({
      apiKey: 'absolutely_FAKEY!!'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
