const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Create Subscription',

  description: 'Create a subscription on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    customer: {
      description: 'Customer\'s email address or customer code',
      example: 'kelvin@example.com',
      required: true
    },
    plan: {
      description: 'Plan code',
      example: 'PLN_u0pyhde6eqtuedk',
      required: true
    },
    authorization: {
      description: 'If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here. If this is not supplied, the customer\'s most recent authorization would be used',
      example: 'AUTH_6tmt288t0o'
    },
    start_date: {
      description: 'Set the date for the first debit. (ISO 8601 format)',
      example: '2021-05-16T00:30:13+01:00'
    }

  },

  exits: {
    success: {
      outputDescription: 'Subscription successfully created'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/subscription',
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
