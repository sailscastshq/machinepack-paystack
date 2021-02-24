const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Create Dedicated Accounts',

  description: 'Create a Dedicated NUBAN and assign to a customer',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    customer: {
      description: 'Customer ID or code',
      example: '481193',
      required: true
    },
    preferred_bank: {
      description: 'The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint',
      example: 'wema-bank'
    }
  },

  exits: {

    success: {
      outputDescription: 'Dedicated account successfully created',
      description: 'Created dedicated account successfully.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/dedicated_account',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((dedicatedAccount) => {
      return exits.success(dedicatedAccount)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
