const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const _ = require('@sailshq/lodash')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'List Plans',

  description: 'List plans available on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    perPage: {
      example: 50,
      description: 'Specify how many records you want to retrieve per page. If not specify we use a default value of 50.'
    },
    page: {
      example: 1,
      description: 'Specify exactly what page you want to retrieve. If not specify we use a default value of 1.'
    },
    interval: {
      example: 'monthly',
      description: 'Filter list by plans with specified interval.'
    },
    amount: {
      example: 100,
      description: 'Filter list by plans with specified amount ( kobo if currency is NGN, cents for USD and pesewas for GHS)'
    }
  },

  exits: {
    success: {
      description: 'Plans retrieved.',
      outputFriendlyName: 'Retrieved plans'
    }
  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = _.isEmpty(params) ? null : getQueryStringFromObject(params)
    const endpoint = _.isNull(queryParams) ? '/plan' : `/plan?${queryParams}`

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
