describe('Paystack.resolveCardBin()', () => {
  it('Successfully resolved card bin', (done) => {
    global.Paystack.resolveCardBin({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      bin: '539983'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('fails to resolve bin with wrong apiKey', (done) => {
    global.Paystack.listPlans({
      apiKey: 'absolutely_FAKEY!!',
      bin: '539983'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
