const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')
module.exports = {

  friendlyName: 'Update Dispute',

  description: 'Update details of a dispute on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id: {
      description: 'Dispute ID',
      example: 624,
      required: true
    },
    refund_amount: {
      description: 'the amount to refund, in kobo if currency is NGN and pesewas if currency is GHS.',
      example: 100,
      required: true
    },
    uploaded_filename: {
      description: 'filename of attachment returned via response from upload url(GET /dispute/:id/upload_url)',
      example: 'attachement'
    }
  },

  exits: {
    success: {
      outputDescription: 'Dispute updated successfully'
    }
  },

  fn: function ({ apiKey, id, ...bodyParams }, exits) {
    makeRequest(`/dispute/${id}`,
      {
        method: 'PUT',
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        body: JSON.stringify(bodyParams)
      }).then((updatedDispute) => {
      return exits.success(updatedDispute)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
