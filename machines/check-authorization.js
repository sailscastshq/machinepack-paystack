const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Check Authorization',

  description: 'All mastercard and visa authorizations can be checked with this endpoint to know if they have funds for the payment you seek.',

  extendedDescription: 'This endpoint should be used when you do not know the exact amount to charge a card when rendering a service. It should be used to check if a card has enough funds based on a maximum range value. It is well suited for: 1. Ride hailing services 2. Logistics services',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    amount: {
      example: 5000,
      description: 'Amount should be in kobo if currency is NGN and pesewas for GHS',
      required: true
    },
    email: {
      example: 'user@example.com',
      description: 'Customer\'s email address',
      required: true
    },
    authorization_code: {
      example: 'AUTH_72btv547',
      description: 'Valid authorization code to charge',
      required: true
    },
    currency: {
      example: 'NGN',
      description: 'Currency in which amount should be charged'
    }
  },

  exits: {

    success: {
      description: 'Authorization checked',
      outputFriendlyName: 'Authorization checked'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/transaction/check_authorization', {
      method: 'POST',
      headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
      body: JSON.stringify(bodyParams)
    }).then((checkAuthorization) => {
      return exits.success(checkAuthorization)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
