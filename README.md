# PhoenixToken (PHNX) - ERC20 Token Contract


PhoenixToken (PHNX) is an ERC20 token contract built using the OpenZeppelin ERC20 implementation. This token contract adheres to the widely-used ERC20 standard, providing seamless interoperability with various decentralized applications and exchanges on the Ethereum network.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Testing](#testing)
- [Contract Details](#contract-details)
- [Contributing](#contributing)
- [License](#license)

## Overview

PhoenixToken (PHNX) is a simple ERC20 token that allows users to transfer, manage, and trade tokens on the Ethereum blockchain. The contract is built using the Hardhat development framework and utilizes the OpenZeppelin ERC20 implementation for security and compliance with the ERC20 standard.

## Features

- ERC20 compliant: Follows the ERC20 token standard for easy integration with Ethereum-based applications and exchanges.
- Solidity Version: Built with Solidity ^0.8.7, leveraging the latest features and enhancements.
- Comprehensive Tests: Includes a set of automated tests to ensure the contract functions as expected.
- Hardhat Integration: Developed using the Hardhat framework, providing a robust development environment for Ethereum projects.

## Getting Started

To interact with and deploy PhoenixToken (PHNX), follow the steps below:

### Prerequisites

Before getting started, ensure you have the following tools installed on your local machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (>= v14.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chidubesteve/PhoenixToken.git
   cd PhoenixToken
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Deployment

To deploy the PhoenixToken contract, follow these steps:

1. Update the `helper-hardhat-config.js` file with your network configurations and desired initial token supply.

2. Run the deployment script:

   ```bash
   npx hardhat deploy --network <NETWORK_NAME>
   ```

   Replace `<NETWORK_NAME>` with the name of your target Ethereum network (e.g., `mainnet`, `rinkeby`, `localhost`, etc.).

### Testing

To run the tests for the PhoenixToken contract, use the following command:

```bash
npx hardhat test
```

## Contract Details

- Contract Name: MyToken
- Symbol: PHNX
- Decimals: 18
- Initial Supply:  "1000000000000000000000000"

## Contributing

Contributions to PhoenixToken are welcome! Feel free to open issues, create pull requests, or suggest improvements. Cheers

## License

PhoenixToken is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
