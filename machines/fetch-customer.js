const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Failed to retrieve Customers with wrong API KEY',

  description: 'Get details of a customer on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    email_or_code: {
      example: 'customer@email.com'
    }
  },

  exits: {

    success: {
      description: 'successfully fetched customer'
    }

  },

  fn: function ({ apiKey, email_or_code }, exits) {
    makeRequest(`/customer/${email_or_code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((customer) => {
      return exits.success(customer)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
