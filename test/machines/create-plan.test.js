describe('Paystack.createPlan()', () => {
  it('Successfully create a plan', (done) => {
    global.Paystack.createPlan({
      apiKey: global.apiKey,
      name: 'Test Plan',
      amount: 10000,
      interval: 'monthly'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
