describe('Paystack.addEvidence()', () => {
  it('Can successfully add evidence for dispute', (done) => {
    global.Paystack.addEvidence({
      apiKey: global.apiKey,
      id: 1,
      customer_email: 'customer@email.com',
      customer_name: 'Loyal Customer',
      customer_phone: '+234901324587',
      service_details: 'Simple misunderstanding'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })
})
