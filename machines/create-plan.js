const {getHeaders} = require("../helpers/get-headers");
const {makeRequest} = require("../helpers/make-request");

module.exports = {

  friendlyName: 'Create Plan',
  description: 'Create a plan on your integration',
  extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',
  moreInfoUrl: 'https://paystack.com/docs/api/#plan-create',
  sync: false,
  inputs: {
    apiKey: require('../global-inputs/apiKey.input'),
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
    interval: {
      example: 'hourly',
      description: 'Interval in words. Valid intervals are hourly, daily, weekly, monthly,biannually, annually.',
      required: true
    },
    description: {
      example: 'This plan is a monthly plan',
      description: 'A description for this plan',
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
      description: 'Currency in which amount is set',
    },
    invoice_limit: {
      example: 6,
      description: 'Number of invoices to raise during subscription to this plan. Can be overridden by specifying an invoice_limit while subscribing.'
    }
  },

  exits: {
    success:{
      description: 'Plan created successfully',
      outputExample: 'Success'
    },
    error: {
      description: 'An unexpected error occurred.',
      outputExample: 'An error happened'
    },


  },

  fn: function ({ apiKey, name, amount, interval, description, send_invoices, send_sms, currency, invoice_limit }, exits) {
    const payload = JSON.stringify({
      name: name,
      amount: amount,
      interval: interval,
      description: description,
      send_invoices: send_invoices,
      send_sms: send_sms,
      currency: currency,
      invoice_limit: invoice_limit
    })
    makeRequest('/plan', {
      method: 'POST',
      headers: getHeaders(apiKey),
      body: payload
    }).then((createdPlan) => exits.success(createdPlan))
   .catch((error) => exits.error(error))
  }
};
