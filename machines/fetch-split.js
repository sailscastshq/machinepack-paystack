const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Fetch Split',

  description: 'Get details of a split on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'The id of the split',
      example: 143,
      required: true
    }
  },

  exits: {

    success: {
      outputDescription: 'split retrieved',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id }, exits) {
    makeRequest(`/split/${id}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedPlan) => {
      return exits.success(retrievedPlan)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
