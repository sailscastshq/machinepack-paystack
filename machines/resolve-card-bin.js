const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Resolve Card BIN',

  description: "Get more information about a customer's card",

  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    bin: {
      description: 'First 6 characters of card',
      example: '539983',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Bin resolved'
    }

  },

  fn: function ({ apiKey, bin }, exits) {
    makeRequest(`/decision/bin/${bin}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((resolvedBin) => {
      return exits.success(resolvedBin)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
