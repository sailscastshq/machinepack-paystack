const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
module.exports = {

  friendlyName: 'List Refunds',

  description: 'List refunds available on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    reference: {
      description: 'Identifier for transaction to be refunded',
      example: 'x7g15k5iye',
      required: true
    },
    currency: {
      description: 'Three-letter ISO currency',
      example: 'NGN',
      required: true
    },
    from: {
      description: 'A timestamp from which to start listing refund',
      example: '2020-09-21'
    },
    to: {
      description: 'A timestamp at which to stop listing refund',
      example: '2021-01-31'
    },
    perPage: {
      description: 'Specify how many records you want to retrieve per page. If not specify we use a default value of 50.',
      example: 50
    },
    page: {
      description: 'Specify exactly what refund you want to page. If not specify we use a default value of 1.',
      example: 1
    }
  },

  exits: {
    success: {
      outputDescription: 'Refunds retrieved'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = getQueryStringFromObject(params)
    makeRequest(`/refund?${queryParams}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedRefunds) => {
      return exits.success(retrievedRefunds)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
