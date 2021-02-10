describe('Paystack.listDisputes()', () => {
  it('Can successfully retrieve disputes', (done) => {
    global.Paystack.listDisputes({
      apiKey: global.apiKey,
      from: '2020-01-05',
      to: '2021-01-5'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
