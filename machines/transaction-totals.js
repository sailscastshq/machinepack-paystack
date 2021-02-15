const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
const _ = require('@sailshq/lodash')

module.exports = {

  friendlyName: 'Transaction Totals',

  description: 'Total amount received on your account',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    from: {
      description: 'A timestamp from which to start listing refund',
      example: '2020-09-21'
    },
    to: {
      description: 'A timestamp at which to stop listing refund',
      example: '2021-01-31'
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
    const endpoint = _.isNull(queryParams) ? '/transaction/totals' : `/transaction/totals?${queryParams}`
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
