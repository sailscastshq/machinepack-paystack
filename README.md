
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://dominuskelvin.dev"><img src="https://avatars.githubusercontent.com/u/24433274?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Omereshone Kelvin</b></sub></a><br /><a href="#infra-DominusKelvin" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sailscastshq/machinepack-paystack/commits?author=DominusKelvin" title="Tests">⚠️</a> <a href="https://github.com/sailscastshq/machinepack-paystack/commits?author=DominusKelvin" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!