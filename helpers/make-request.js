const fetch = require('node-fetch')
const makeRequest = async  (url, options = {}) => {
  try {
    const response = await fetch(`https://api.paystack.co${url}`, options)
    const json = await response.json()
    return json
  } catch (error) {
    throw error
  }
}

exports.makeRequest = makeRequest
