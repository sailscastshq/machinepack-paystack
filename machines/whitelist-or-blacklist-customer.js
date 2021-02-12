const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Whitelist Or Blacklist Customer',

  description: 'Whitelist or blacklist a customer on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    customer: {
      example: 'CUS_xnxdt6s1zg1f4nx',
      description: 'Customer\'s code, or email address',
      required: true
    },
    risk_action: {
      example: 'allow',
      description: 'One of the possible risk actions [ default, allow, deny ]. allow to whitelist. deny to blacklist. Customers start with a default risk action.'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/customer/set_risk_action',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((response) => {
      return exits.success(response)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
