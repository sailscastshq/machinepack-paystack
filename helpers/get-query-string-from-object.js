const querystring = require('querystring')
const getQueryStringFromObject = function (object) {
  const qs = querystring.stringify(object)
  return qs
}

exports.getQueryStringFromObject = getQueryStringFromObject
