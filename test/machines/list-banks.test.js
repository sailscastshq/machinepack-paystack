describe('Paystack.listBanks()', () => {
  it('Successfully retrieved banks with only required params', (done) => {
    global.Paystack.listBanks({
      apiKey: global.apiKey,
      country: 'nigeria',
      use_cursor: true,
      perPage: 1
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
  it('failed to retrieved banks with wrong apiKey', (done) => {
    global.Paystack.listPlans({
      apiKey: 'absolutely_FAKEY!!',
      country: 'nigeria',
      use_cursor: true,
      perPage: 1
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
