const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Add Split Subaccount',

  description: 'Add a Subaccount to a Transaction Split, or update the share of an existing Subaccount in a Transaction Split',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'The id of the split',
      example: 143,
      required: true
    },
    share: {
      example: 20,
      description: 'This is the transaction share for the subaccount'
    },
    subaccount: {
      example: 'ACCT_jsuq5uwf3n8la7b',
      description: 'This is the sub account code'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Successfully add/update split subaccount.'
    }

  },

  fn: function ({ apiKey, id, ...bodyParams }, exits) {
    makeRequest(`/split/${id}/subaccount/add`,
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
