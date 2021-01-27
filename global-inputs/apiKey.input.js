module.exports = {
  friendlyName: 'API Key',
  description: 'A valid Paystack API key (aka Secret Key).',
  required: true,
  whereToGet: {
    url: 'https://dashboard.paystack.com/#/settings/developer',
    description: 'Copy either "Test Secret Key" or "Live Secret Key" from your Paystack dashboard.',
    extendedDescription: 'Make sure you are logged in to your Paystack account, or create an account if you have not already done so.'
  },
  example: 'pk_test_f01df68ffa23d136959f2c532c583f7be2763932',
  protect: true
};
