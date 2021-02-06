const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Create Refund',

  description: 'Initiate a refund on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    transaction: {
      description: 'Transaction reference or id',
      example: '1641',
      required: true
    },
    amount: {
      description: 'Amount, in kobo if currency is NGN and pesewas if currency is GHS, to be refunded to the customer.',
      extendedDescription: 'Amount is optional(defaults to original transaction amount) and cannot be more than the original transaction amount.',
      example: 2500
    },
    currency: {
      description: 'Three-letter ISO currency',
      example: 'USD'
    },
    customer_note: {
      description: 'Customer reason',
      example: 'I love people'
    },
    merchant_note: {
      description: 'Merchant reason',
      example: 'People are awesome'
    }
  },

  exits: {
    success: {
      outputDescription: 'Refund created'
    }
  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/refund',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((createdRefund) => {
      return exits.success(createdRefund)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
