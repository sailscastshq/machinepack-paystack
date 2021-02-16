describe('Paystack.addSplitSubaccount()', () => {
  it('Successfully hit add Split subaccount endpoint', (done) => {
    global.Paystack.addSplitSubaccount({
      apiKey: global.apiKey,
      id: 111,
      share: 20,
      subaccount: 'ACCT_jsuq5uwf3n8la7b'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to add Split subaccount with wrong API KEY', (done) => {
    global.Paystack.addSplitSubaccount({
      apiKey: 'wrong or fake key',
      id: 111,
      share: 30,
      subaccount: 'ACCT_jsuq5uwf3n8la7b'
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
