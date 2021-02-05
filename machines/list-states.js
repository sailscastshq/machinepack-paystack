const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {
  friendlyName: 'List States',
  description: 'Get a list of states for a country for address verification.',
  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    country: {
      description: 'The country code of the states to list. It is gotten after the charge request.',
      example: 'CA',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'States retrieved'
    }

  },

  fn: function ({ apiKey, country }, exits) {
    makeRequest(`/address_verification/states?country=${country}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedStates) => {
      return exits.success(retrievedStates)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
