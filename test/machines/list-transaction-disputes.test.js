describe('Paystack.listTransactionDisputes()', () => {
  it.only('Can successfully retrieve transaction disputes', (done) => {
    global.Paystack.listTransactionDisputes({
      apiKey: global.apiKey,
      id: 1
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
