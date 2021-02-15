const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Add Evidence',

  description: 'Provide evidence for a dispute',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    customer_email: {
      description: 'Customer email',
      example: 'customer@email.com',
      required: true
    },
    id: {
      description: 'Dispute ID',
      example: 624,
      required: true
    },
    customer_name: {
      description: 'Customer name',
      example: 'Loyal Customer',
      required: true
    },
    customer_phone: {
      description: 'Customer phone',
      example: '+2348102312345',
      required: true
    },
    service_details: {
      description: 'Details of service involved',
      example: 'Dispute',
      required: true
    },
    delivery_address: {
      description: 'Delivery Address',
      example: 'No. 5 Address of Customer'
    },
    delivery_date: {
      description: 'ISO 8601 representation of delivery date (YYYY-MM-DD)',
      example: '2021-01-31'
    }
  },

  exits: {
    success: {
      outputDescription: 'Evidence created'
    }
  },

  fn: function ({ apiKey, id, ...bodyParams }, exits) {
    makeRequest(`/dispute/${id}/evidence`,
      {
        method: 'POST',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((createdEvidence) => {
      return exits.success(createdEvidence)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
