const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const _ = require('@sailshq/lodash')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'List Transactions',

  description: 'List transactions carried out on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    perPage: {
      example: 50,
      description: 'Specify how many records you want to retrieve per page. If not specify we use a default value of 50.'
    },
    page: {
      example: 1,
      description: 'Specify exactly what page you want to retrieve. If not specify we use a default value of 1.'
    },
    customer: {
      example: 'CUS_1uld4hluw0g2gn0',
      description: 'Specify an ID for the customer whose transactions you want to retrieve'
    },
    status: {
      example: 'abandoned',
      description: "Filter transactions by status ('failed', 'success', 'abandoned')"
    },
    from: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    },
    to: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp from which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    },
    amount: {
      example: 100,
      description: 'Filter transactions by amount. Specify the amount, in kobo if currency is NGN and pesewas if currency is GHS'
    }
  },

  exits: {

    success: {
      description: 'Transactions retrieved.',
      outputFriendlyName: 'Retrieved transactions'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    // where params = { perPage, page,customer, status, from, to, amount }

    const definedParams = _.isEmpty(params) ? {} : _.pick(params, _.identity)
    const queryParams = _.isEmpty(definedParams) ? null : getQueryStringFromObject(definedParams)
    const endpoint = _.isNull(queryParams) ? '/transaction' : `/transaction?${queryParams}`

    makeRequest(endpoint,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedTransaction) => {
      return exits.success(retrievedTransaction)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
