const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'List Countries',

  description: 'Gets a list of Countries that Paystack currently supports',

  cacheable: false,

  inputs: {
    apiKey: require('../constants/apiKey.input')
  },

  exits: {
    success: {
      outputDescription: 'Countries retrieved'
    }

  },

  fn: function ({ apiKey }, exits) {
    makeRequest('/country',
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedCountries) => {
      return exits.success(retrievedCountries)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
