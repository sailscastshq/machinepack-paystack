const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Disable Subscription',

  description: 'Disable a subscription on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    code: {
      description: 'Subscription code',
      example: 'SUB_vsyqdmlzble3uii',
      requred: true
    },
    token: {
      description: 'Email token',
      example: 'd7gofp6yppn3qz7',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Subscription disabled successfully'
    }
  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/subscription/disable',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((subscriptionDisabled) => {
      return exits.success(subscriptionDisabled)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
