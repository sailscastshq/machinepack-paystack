const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Charge Authorization',

  description: 'All authorizations marked as reusable can be charged with this endpoint whenever you need to recieve payments.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    amount: {
      example: 27000,
      description: 'Amount should be in kobo if currency is NGN and pesewas for GHS',
      required: true
    },
    email: {
      example: 'customer@email.com',
      description: 'Customer\'s email address',
      required: true
    },
    authorization_code: {
      example: 'AUTH_72btv547',
      description: 'Valid authorization code to charge',
      required: true
    },
    reference: {
      example: 'cn65lf4ixmkzvda',
      description: 'Unique transaction reference. Only -, ., = and alphanumeric characters allowed.'
    },
    currency: {
      example: 'NGN',
      description: 'Currency in which amount should be charged'
    },
    metadata: {
      example: '{"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}',
      description: 'Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.'
    },
    channels: {
      example: ['card', 'bank'],
      description: 'Send us "card" or "bank" or "card","bank" as an array to specify what options to show the user paying'
    },
    subaccount: {
      example: 'ACCT_8f4s1eq7ml6rlzj',
      description: 'The code for the subaccount that owns the payment.'
    },
    transaction_charge: {
      example: 2000,
      description: 'A flat fee to charge the subaccount for this transaction, in kobo if currency is NGN and pesewas if currency is GHS. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates '
    },
    bearer: {
      example: 'account',
      description: 'Who bears Paystack charges? account or subaccount (defaults to account).'
    },
    queue: {
      example: true,
      description: 'If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. Send queue:true to take advantage of our queued charging.'
    }
  },

  exits: {

    success: {
      outputFriendlyName: 'Charge authorized successfully',
      description: 'Charge authorized successfully'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/transaction/charge_authorization', {
      method: 'POST',
      headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
      body: JSON.stringify(bodyParams)
    })
      .then((chargeAuthorization) => {
        return exits.success(chargeAuthorization)
      }).catch(error => {
        return exits.error(error)
      })
  }

}
