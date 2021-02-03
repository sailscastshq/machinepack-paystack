const fetch = require('node-fetch')
const makeRequest = async (url, options = {}) => {
  const response = await fetch(`https://api.paystack.co${url}`, options)
  const json = await response.json()
  return json
}

exports.makeRequest = makeRequest
