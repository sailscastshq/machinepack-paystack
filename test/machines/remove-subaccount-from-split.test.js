describe('Paystack.removeSubaccountFromSplit()', () => {
  it('Successfully hit remove subaccount from split endpoint', (done) => {
    global.Paystack.removeSubaccountFromSplit({
      apiKey: global.apiKey,
      id: 111,
      subaccount: 'ACCT_jsuq5uwf3n8la7b'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to remove subaccount from split with wrong API KEY', (done) => {
    global.Paystack.removeSubaccountFromSplit({
      apiKey: 'wrong or fake key',
      id: 111,
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
