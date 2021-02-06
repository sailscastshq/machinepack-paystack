const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Enable Subscription',

  description: 'Enable a subscription on your integration',

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
      outputDescription: 'Subscription enabled successfully'
    }
  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/subscription/enable',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((subcriptionEnabled) => {
      return exits.success(subcriptionEnabled)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
