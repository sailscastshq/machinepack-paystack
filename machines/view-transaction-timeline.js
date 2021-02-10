const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'View Transaction Timeline',

  description: 'View the timeline of a transaction',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_reference: {
      example: 292584114,
      description: 'The ID or the reference of the transaction'
    }
  },

  exits: {

    success: {
      description: 'View Transaction Timeline successfully',
      outputFriendlyName: 'Successfully View Transaction Timeline'
    }

  },

  fn: function ({ apiKey, id_or_reference }, exits) {
    makeRequest(`/transaction/timeline/${id_or_reference}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((transactionTimeline) => {
      return exits.success(transactionTimeline)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
