const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Fetch Plan',

  description: 'Get details of a plan on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_code: {
      description: 'The plan ID or code you want to fetch',
      example: 'PLN_gx2wn530m0i3w3m',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'Plan retrieved'
    }

  },

  fn: function ({ apiKey, id_or_code }, exits) {
    makeRequest(`/plan/${id_or_code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedPlan) => {
      return exits.success(retrievedPlan)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
