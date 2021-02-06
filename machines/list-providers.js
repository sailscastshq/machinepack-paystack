const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const _ = require('@sailshq/lodash')
const { makeRequest } = require('../helpers/make-request')
module.exports = {
  friendlyName: 'List Providers',
  description: 'Get a list of all providers for Dedicated NUBAN',
  moreInfoUrl: 'https://paystack.com/docs/api/#miscellaneous-country',

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    pay_with_bank_transfer: {
      description: 'A flag to filter for available providers',
      example: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Providers retrieved'
    }
  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = _.isEmpty(params) ? null : getQueryStringFromObject(params)
    const endpoint = _.isNull(queryParams) ? '/bank' : `/bank?${queryParams}`
    makeRequest(endpoint,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedBanks) => {
      return exits.success(retrievedBanks)
    }).catch(error => {
      return exits.error(error)
    })
  }
}
