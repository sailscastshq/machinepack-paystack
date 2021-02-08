const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Verify Transaction',

  description: 'Confirm the status of a transaction',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    reference: {
      example: 'DG4uishudoq90LD',
      description: 'The transaction reference used to intiate the transaction',
      required: true
    }
  },

  exits: {

    success: {
      description: 'Transaction verified successfully.',
      outputFriendlyName: 'Verified transaction successfully'
    }

  },

  fn: function ({ apiKey, reference }, exits) {
    makeRequest(`/transaction/verify/${reference}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedTransaction) => {
      return exits.success(retrievedTransaction)
    }).catch(error => {
      return exits.error(error)
    })
    return exits.success()
  }

}
