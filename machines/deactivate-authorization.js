const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Deactivate Authorization',

  description: 'Deactivate an authorization when the card needs to be forgotten',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    authorization_code: {
      description: 'Authorization code to be deactivated',
      example: 'AUTH_72btv547'
    }
  },

  exits: {

    success: {
      description: 'Authorization Deactivated successfully.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/customer/deactivate_authorization',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((createdSubscription) => {
      return exits.success(createdSubscription)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
