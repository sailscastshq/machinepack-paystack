const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Fetch Dispute',

  description: 'Get more details about a dispute.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'The dispute ID you want to fetch',
      example: 624,
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Dispute retrieved'
    }
  },

  fn: function ({ apiKey, id }, exits) {
    makeRequest(`/dispute/${id}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedDispute) => {
      return exits.success(retrievedDispute)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
