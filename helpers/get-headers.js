const getHeaders = (apiKey) => {
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
  return headers
}
exports.getHeaders = getHeaders
