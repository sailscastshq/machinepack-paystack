describe('Paystack.updateSplit()', () => {
  it('Successfully hit update Split endpoint', (done) => {
    global.Paystack.updateSplit({
      apiKey: global.apiKey,
      id: 111,
      name: 'new split name',
      active: true
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to Update Splits with wrong API KEY', (done) => {
    global.Paystack.updateSplit({
      apiKey: 'wrong or fake key',
      id: 111,
      name: 'new split name',
      active: true
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
