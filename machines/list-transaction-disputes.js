const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'List Transaction Disputes',

  description: 'This endpoint retrieves disputes for a particular transaction',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'The transaction ID you want to fetch it\'s disputes',
      example: 624,
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Dispute retrieved successfully'
    }
  },

  fn: function ({ apiKey, id }, exits) {
    makeRequest(`/dispute/transaction/${id}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedTransactionDisputes) => {
      return exits.success(retrievedTransactionDisputes)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
