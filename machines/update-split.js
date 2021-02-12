const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Update Split',

  description: 'Update a transaction split details on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'The id of the split',
      example: 143,
      required: true
    },
    name: {
      example: 'Flat Split',
      description: 'Name of the transaction split'
    },
    active: {
      example: true,
      description: 'True or False'
    },
    subaccounts: {
      example: 'ACCT_jsuq5uwf3n8la7b',
      description: 'Subaccount code of a subaccount in the split group. This should be specified only if the bearer_type is subaccount'
    },
    bearer_type: {
      example: 'subaccount',
      description: 'Any of the following values: subaccount | account | all-proportional | all'
    }
  },

  exits: {

    success: {
      description: 'split updated successfully.'
    }

  },

  fn: function ({ apiKey, id, ...bodyParams }, exits) {
    makeRequest(`/split/${id}`,
      {
        method: 'PUT',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((response) => {
      return exits.success(response)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
