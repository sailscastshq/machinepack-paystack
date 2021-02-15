const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Fetch Transaction',

  description: 'Get details of a transaction carried out on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      example: 292584114,
      description: 'An ID for the transaction to fetch'
    }
  },

  exits: {

    success: {
      description: 'Fetch transaction successfully',
      outputFriendlyName: 'Successfully fetched transaction'
    }

  },

  fn: function ({ apiKey, id }, exits) {
    makeRequest(`/transaction/${id}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedTransaction) => {
      return exits.success(retrievedTransaction)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
