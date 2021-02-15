const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'List Disputes',

  description: 'List disputes filed against you',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    from: {
      description: 'A timestamp from which to start listing dispute',
      example: '2020-01-05',
      required: true
    },
    to: {
      description: 'A timestamp at which to stop listing dispute',
      example: '2021-01-5',
      required: true
    },
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    transaction: {
      description: 'Transaction Id',
      example: '36878'
    },
    status: {
      description: 'Dispute Status. Acceptable values: { awaiting-merchant-feedback | awaiting-bank-feedback | pending | resolved }',
      example: 'resolved'
    }
  },

  exits: {
    success: {
      outputFriendlyName: 'Disputes Retrieved',
      description: 'Done.'
    }
  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = getQueryStringFromObject(params)
    makeRequest(`/dispute?${queryParams}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedDisputes) => {
      return exits.success(retrievedDisputes)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
