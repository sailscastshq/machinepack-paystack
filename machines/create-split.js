const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Create Split',

  description: 'Create a split payment on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    name: {
      example: 'Flat Split',
      description: 'Name of the transaction split'
    },
    type: {
      example: 'flat',
      description: 'The type of transaction split you want to create. You can use one of the following: percentage | flat'
    },
    currency: {
      example: 'NGN',
      description: 'NGN, GHS, or USD'
    },
    subaccounts: {
      example: [{ subaccount: 'ACCT_z3x6z3nbo14xsil', share: 20 }],
      description: 'A list of object containing subaccount code and number of shares: [{subaccount_code: ‘ACT_xxxxxxxxxx’, share: xxx},{...}]'
    },
    bearer_type: {
      example: 'subaccount',
      description: 'Any of subaccount | account | all-proportional | all'
    },
    bearer_subacount: {
      example: 'ACCT_hdl8abxl8drhrl3',
      description: 'Subaccount code'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/split',
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((createdRefund) => {
      return exits.success(createdRefund)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
