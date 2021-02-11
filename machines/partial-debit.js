const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Partial Debit',

  description: 'Retrieve part of a payment from a customer',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    authorization_code: {
      example: 'AUTH_72btv547',
      description: 'Authorization Code'
    },

    currency: {
      example: 'NGN',
      description: 'Specify the currency you want to debit'
    },

    amount: {
      example: '20000',
      description: 'Amount should be in kobo if currency is NGN and pesewas for GHS'
    },

    email: {
      example: 'customer@email.com',
      description: 'Customer\'s email address (attached to the authorization code)'
    },
    reference: {
      example: 'REF_0000000001',
      description: 'Unique transaction reference. Only -, ., = and alphanumeric characters allowed'
    },
    at_least: {
      description: 'Minimum amount to charge',
      example: '2000'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, bodyParams }, exits) {
    makeRequest('/transaction/partial_debit', {
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
