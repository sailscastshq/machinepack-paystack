const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Initialize Transaction',

  description: 'Initialize a transaction from your backend',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    amount: {
      example: 5000,
      description: 'Amount should be in kobo if currency is NGN and cents for USD',
      required: true
    },
    email: {
      example: 'user@example.com',
      description: 'Customer\'s email address',
      required: true
    },
    currency: {
      example: 'NGN',
      description: 'The transaction currency (NGN, GHS or USD). Defaults to your integration currency'
    },
    reference: {
      example: '7PVGX8MEk85tgeEpVDtD',
      description: 'Unique transaction reference. Only -, ., = and alphanumeric characters allowed'
    },
    callback_url: {
      example: 'https://example.com/',
      description: 'Fully qualified url, e.g. https://example.com/ . Use this to override the callback url provided on the dashboard for this transaction'
    },
    plan: {
      example: '',
      description: 'If transaction is to create a subscription to a predefined plan, provide plan code here. This would invalidate the value provided in amount'
    },
    invoice_limit: {
      example: 6,
      description: 'Number of times to charge customer during subscription to plan'
    },
    metadata: {
      example: '{"custom_fields":[{"display_name":"Cart ID","variable_name": "cart_id","value": "8393"}]}',
      description: 'Stringified JSON object. Add a custom_fields attribute which has an array of objects if you would like the fields to be added to your transaction when displayed on the dashboard.'
    },
    channels: {
      example: ['card', 'bank_transfer'],
      description: "An array of payment channels to control what channels you want to make available to the user to make a payment with. Available channels include: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer']"
    },
    split_code: {
      example: 'SPL_98WF13Eb3w',
      description: 'The split code of the transaction split.'
    },
    subaccount: {
      example: 'ACCT_8f4s1eq7ml6rlz',
      description: 'The code for the subaccount that owns the payment.'
    },
    transaction_charge: {
      example: 2000,
      description: 'A flat fee to charge the subaccount for this transaction, in kobo if currency is NGN and pesewas if currency is GHS. This overrides the split percentage set when the subaccount was created. Ideally, you will need to use this if you are splitting in flat rates'
    },
    bearer: {
      example: 'account',
      description: 'Who bears Paystack charges? account or subaccount (defaults to account).'
    }
  },

  exits: {

    success: {
      description: 'Authorization URL created',
      outputFriendlyName: 'Authorization URL created'
    }

  },

  fn: function ({ apiKey, ...bodyParams }, exits) {
    makeRequest('/transaction/initialize', {
      method: 'POST',
      headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
      body: JSON.stringify(bodyParams)
    }).then((createdTransaction) => {
      return exits.success(createdTransaction)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
