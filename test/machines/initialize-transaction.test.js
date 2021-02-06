describe('Paystack.initializeTransaction()', () => {
  it('Successfully initialize Transaction', (done) => {
    global.Paystack.initializeTransaction({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      email: 'customer@email.com',
      amount: '20000'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Successfully initialize Transaction with custom refrence', (done) => {
    const _ = require('@sailshq/lodash')
    const customRef = `custom_ref_${_.random(100000)}` // generate random id to avoid dublicate ref id
    global.Paystack.initializeTransaction({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      email: 'customer2@email.com',
      amount: '200000',
      reference: customRef
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.data.reference === customRef) return done()
      return done(response)
    })
  })

  it('Faild to initialize Transaction with fake API KEY', (done) => {
    global.Paystack.initializeTransaction({
      apiKey: 'fake Api key',
      email: 'customer2@email.com',
      amount: '200000'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
