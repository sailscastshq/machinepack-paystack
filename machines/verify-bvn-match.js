const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
const _ = require('@sailshq/lodash')
module.exports = {

  friendlyName: 'Verify BVN Match',

  description: 'Check if an account number and BVN are linked',

  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    bank_code: {
      description: 'You can get the list of banks codes by calling the List Bank endpoint',
      example: '011',
      required: true
    },
    bvn: {
      description: '11 digits Bank Verification Number',
      example: '00000000000',
      required: true
    },
    first_name: {
      description: 'Customer\'s First Name',
      example: 'Kelvin'
    },
    middle_name: {
      description: 'Customer\'s Middle Name',
      example: 'Oghenerhoro'
    },
    last_name: {
      description: 'Customer\'s Last Name',
      example: 'Omereshone'
    }
  },

  exits: {

    success: {
      outputDescription: 'BVN lookup successful'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    const definedBodyParams = _.pick(bodyParams, _.identity)
    makeRequest('/bvn/match',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(definedBodyParams)
      }).then((lookedUpBvn) => {
      return exits.success(lookedUpBvn)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
