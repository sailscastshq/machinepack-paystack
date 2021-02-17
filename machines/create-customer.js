const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Create Customer',

  description: 'Create a customer on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    email: {
      example: 'customer@email.com',
      description: 'Customer\'s email address'
    },
    first_name: {
      example: 'john',
      description: 'Customer\'s first name'
    },
    last_name: {
      example: 'doe',
      description: 'Customer\'s last name'
    },
    phone: {
      example: '23481363647484',
      description: 'Customer\'s phone number'
    },
    metadata: {
      type: 'ref',
      example: {},
      description: 'A set of key/value pairs that you can attach to the customer. It can be used to store additional information in a structured format.'
    }
  },

  exits: {

    success: {
      description: 'Customer Created successfully.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/customer',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((response) => {
      return exits.success(response)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
