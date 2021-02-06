const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'List banks',
  description: 'Get a list of all Nigerian banks and their properties',
  moreInfoUrl: 'https://paystack.com/docs/api/#miscellaneous-country',
  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    country: {
      description: 'The country from which to obtain the list of supported banks. e.g country=ghana or country=nigeria',
      required: true,
      example: 'ghana'
    },
    use_cursor: {
      description: 'Flag to enable cursor pagination on the endpoint',
      required: true,
      example: true
    },
    perPage: {
      description: 'The number of objects to return per page. Defaults to 50, and limited to 100 records per page.',
      example: 30
    },
    next: {
      description: 'A cursor that indicates your place in the list. It can be used to fetch the next page of the list',
      example: ''
    },
    previous: {
      description: 'A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request',
      example: ''
    },
    gateway: {
      description: 'The gateway type of the bank. It can be one of these: [emandate, digitalbankmandate]',
      example: 'emandate'
    },
    type: {
      description: 'Type of financial channel. For Ghanaian channels, please use either mobile_money for mobile money channels OR ghipps for bank channels',
      example: 'mobile_money'
    },
    currency: {
      description: 'Any of NGN, USD or GHS',
      example: 'NGN'
    }

  },

  exits: {
    success: {
      outputDescription: 'Banks retrieved'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const queryParams = getQueryStringFromObject(params)
    makeRequest(`/bank?${queryParams}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedBanks) => {
      return exits.success(retrievedBanks)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
