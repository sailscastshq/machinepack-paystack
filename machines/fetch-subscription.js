const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Fetch Subscription',

  description: 'Get details of a subscription on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_code: {
      description: 'The subscription ID or code you want to fetch',
      example: 28,
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Subscription retrieved'
    }
  },

  fn: function ({ apiKey, id_or_code }, exits) {
    makeRequest(`/subscription/${id_or_code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedSubscription) => {
      return exits.success(retrievedSubscription)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
