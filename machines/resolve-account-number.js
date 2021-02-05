const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
module.exports = {

  friendlyName: 'Resolve Account Number',

  description: 'Confirm an account belongs to the right customer',

  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    account_number: {
      description: 'Account Number',
      example: '0022728151',
      required: true
    },
    bank_code: {
      description: 'You can get the list of bank codes by calling the List Bank endpoint',
      example: '063',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Account number resolved'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = getQueryStringFromObject(params)
    makeRequest(`/bank/resolve?${queryParams}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((resolvedAccountNumber) => {
      return exits.success(resolvedAccountNumber)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
