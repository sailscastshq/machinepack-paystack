const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Update Plan',

  description: 'Update a plan details on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_code: {
      description: 'The plan ID or code you want to fetch',
      example: 'PLN_gx2wn530m0i3w3m',
      required: true
    },
    name: {
      example: 'John',
      description: 'The name of plan',
      required: true
    },
    amount: {
      example: 5000,
      description: 'Amount should be in kobo if currency is NGN and cents for USD',
      required: true
    },
    description: {
      example: 'This plan is a monthly plan',
      description: 'A description for this plan'
    },
    send_invoices: {
      example: true,
      description: 'Set to false if you don\'t want invoices to be sent to your customers'
    },
    send_sms: {
      example: true,
      description: 'Set to false if you don\'t want text messages to be sent to your customers'
    },
    currency: {
      example: 'USD',
      description: 'Currency in which amount is set'
    },
    invoice_limit: {
      example: 6,
      description: 'Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing.'
    }
  },

  exits: {
    success: {
      outputDescription: 'Plan updated'
    }

  },

  fn: function ({ apiKey, id_or_code, ...bodyParams }, exits) {
    makeRequest(`/plan/${id_or_code}`,
      {
        method: 'PUT',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((updatedPlan) => {
      return exits.success(updatedPlan)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
