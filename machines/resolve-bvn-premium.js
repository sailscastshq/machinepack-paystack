const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Resolve BVN Premium',

  description: "Get a customer's detailed KYC profile using their Bank Verification Number",

  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    bvn: {
      description: '11 digits Bank Verification Number',
      example: '00000000000',
      required: true
    }
  },

  exits: {
    success: {
      outputDescription: 'BVN resolved'
    }

  },

  fn: function ({ apiKey, bvn }, exits) {
    makeRequest(`/identity/bvn/resolve/${bvn}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((resolvedBvn) => {
      return exits.success(resolvedBvn)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
