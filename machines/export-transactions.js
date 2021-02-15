const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const _ = require('@sailshq/lodash')
const { makeRequest } = require('../helpers/make-request')
const { getHeaders } = require('../helpers/get-headers')

module.exports = {

  friendlyName: 'Export Transactions',

  description: 'List transactions carried out on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    from: {
      description: 'A timestamp from which to start listing transaction',
      example: '2020-09-21'
    },
    to: {
      description: 'A timestamp at which to stop listing transaction',
      example: '2021-01-31'
    },
    customer: {
      description: 'Specify an ID for the customer whose transactions you want to retrieve',
      example: 'CUS_dhklshjd648fh4u'
    },
    status: {
      description: 'Filter transactions by status ("failed", "success", "abandoned")',
      example: 'success'
    },
    currency: {
      description: 'Specify the transaction currency to export',
      example: 'NGN'
    },
    amount: {
      description: 'Filter transactions by amount. Specify the amount, in kobo if currency is NGN and pesewas if currency is GHS.',
      example: 20000
    },
    settled: {
      description: 'Set to true to export only settled transactions. false for pending transactions. Leave undefined to export all transactions',
      example: true
    },
    settlement: {
      description: 'An ID for the settlement whose transactions we should export',
      example: 24363728
    },
    payment_page: {
      description: 'Specify a payment page\'s id to export only transactions conducted on said page',
      example: 24363728
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = _.isEmpty(params) ? null : getQueryStringFromObject(params)
    const endpoint = _.isNull(queryParams) ? '/transaction/export' : `/transaction/export?${queryParams}`
    makeRequest(endpoint,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((transactionTotal) => {
      return exits.success(transactionTotal)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
