const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
const _ = require('@sailshq/lodash')
module.exports = {

  friendlyName: 'List Splits',

  description: 'List/search for the transaction splits available on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    name: {
      example: 'Flat Split',
      description: 'The name of the split'
    },
    active: {
      example: true,
      description: 'Any of true or false'
    },
    sort_by: {
      example: 'createdAt',
      description: 'Sort by name, defaults to createdAt date'
    },
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    from: {
      example: '2019-09-21',
      description: 'A timestamp from which to start listing splits'
    },
    to: {
      example: '2019-09-21',
      description: 'A timestamp at which to stop listing splits'
    }

  },

  exits: {

    success: {
      variablName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = _.isEmpty(params) ? null : getQueryStringFromObject(params)
    const endpoint = _.isNull(queryParams) ? '/split' : `/split?${queryParams}`
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
