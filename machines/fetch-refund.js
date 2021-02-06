const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Fetch Refund',

  description: 'Get details of a refund on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    reference: {
      description: 'Identifier for transaction to be refunded',
      example: 'x7g15k5iye',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Refund retrieved'
    }
  },

  fn: function ({ apiKey, reference }, exits) {
    makeRequest(`/refund/${reference}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedRefund) => {
      return exits.success(retrievedRefund)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
