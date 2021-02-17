describe('Paystack.createCustomer()', () => {
  it('Successfully create Customer', (done) => {
    global.Paystack.createCustomer({
      apiKey: global.apiKey,
      email: 'customer@email.com',
      first_name: 'John',
      last_name: 'Doe'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status) {
        return done()
      }
    })
  })

  it('Faild to create Customer with fake API KEY', (done) => {
    global.Paystack.createCustomer({
      apiKey: 'fake Api key',
      email: 'customer@email.com',
      first_name: 'John',
      last_name: 'Doe'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
