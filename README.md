
<h1>
  <a href="http://node-machine.org" title="Node-Machine public registry"><img alt="node-machine logo" title="Node-Machine Project" src="http://node-machine.org/images/machine-anthropomorph-for-white-bg.png" width="50" /></a>
  machinepack-paystack
</h1>

Communicate with the Paystack API to initialize transaction, create plans, etc.
## Installation
```sh
$ npm install machinepack-paystack --save
```

## Usage

```js
// Initialize a transaction on your Paystack integration
const Paystack = require('machinepack-paystack')
 Paystack.initializeTransaction({
      apiKey: process.env.PAYSTACK_API_KEY,
      email: 'customer@email.com',
      amount: '20000'
    }).exec(function (error, intializedTransaction) {
     console.log(initializedTransaction)
    })
```

## Test

To run the test in this machine, rename `env.example` to `.env` then replace the content with your Paystack test API Key
Now run test simpley with:

```sh
npm test
```

Alternatively you can run tests by

```sh
PAYSTACK_API_KEY_FOR_TESTS=YOUR_PAYSTACK_TEST_API_KEY npm test
```
