const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Validate Customer',

  description: 'Validate a customer\'s identity',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    first_name: {
      example: 'john',
      description: 'Customer\'s first name'
    },
    customer_code: {
      example: 'CUS_xnxdt6s1zg1f4nx',
      description: 'Customer\'s code',
      required: true
    },
    last_name: {
      example: 'doe',
      description: 'Customer\'s last name'
    },
    type: {
      example: 'bvn',
      description: 'Predefined types of identification. Valid values: bvn'
    },
    value: {
      example: '20144636273',
      description: 'Customer\'s identification number'
    },
    country: {
      example: 'NG',
      description: '2 letter country code of identification issuer '
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, customer_code, ...bodyParams }, exits) {
    makeRequest(`/customer/${customer_code}/identification`,
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
