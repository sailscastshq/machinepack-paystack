const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Remove Subaccount from Split',

  description: 'Remove a subaccount from a transaction split',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'The id of the split',
      example: 143,
      required: true
    },
    subaccount: {
      example: 'ACCT_jsuq5uwf3n8la7b',
      description: 'This is the sub account code'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Successfully remove split subaccount.'
    }

  },

  fn: function ({ apiKey, id, ...bodyParams }, exits) {
    makeRequest(`/split/${id}/subaccount/remove`,
      {
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
