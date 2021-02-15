describe('Paystack.createSplit()', () => {
  it('Successfully hit create Split endpoint', (done) => {
    global.Paystack.createSplit({
      apiKey: global.apiKey,
      name: 'Percentage Split',
      type: 'percentage',
      currency: 'NGN',
      subaccounts: [
        {
          subaccount: 'ACCT_z3x6z3nbo14xsil',
          share: 20
        },
        {
          subaccount: 'ACCT_pwwualwty4nhq9d',
          share: 30
        }],
      bearer_type: 'subaccount',
      bearer_subaccount: 'ACCT_z3x6z3nbo14xsil'
    }).exec(function (error, _) {
      if (error) return done(error)

      return done()
    })
  })

  it('Faild to create Split with fake API KEY', (done) => {
    global.Paystack.createSplit({
      apiKey: 'fake Api key',
      name: 'Percentage Split',
      type: 'percentage',
      currency: 'NGN',
      subaccounts: [
        {
          subaccount: 'ACCT_z3x6z3nbo14xsil',
          share: 20
        },
        {
          subaccount: 'ACCT_pwwualwty4nhq9d',
          share: 30
        }],
      bearer_type: 'subaccount',
      bearer_subaccount: 'ACCT_hdl8abxl8drhrl3'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
