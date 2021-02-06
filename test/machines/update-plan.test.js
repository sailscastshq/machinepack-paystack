describe('Paystack.updatePlan()', () => {
  it('Successfully updated a plan', (done) => {
    global.Paystack.updatePlan({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      id_or_code: 'PLN_u0pyhde6eqtuedk',
      name: 'Newest Plan',
      amount: 40000
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
