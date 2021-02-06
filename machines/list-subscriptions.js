const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const _ = require('@sailshq/lodash')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'List Subscriptions',

  description: 'List subscriptions available on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    customer: {
      description: 'Filter by Customer ID',
      example: 1234
    },
    plan: {
      description: 'Filter by Plan ID',
      example: 4321
    }
  },

  exits: {

    success: {
      outputDescription: 'Subscriptions retrieved'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = _.isEmpty(params) ? null : getQueryStringFromObject(params)
    const endpoint = _.isNull(queryParams) ? '/subscription' : `/subscription?${queryParams}`

    makeRequest(endpoint,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedPlan) => {
      return exits.success(retrievedPlan)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
