require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
const INNITIAL_SUPPLY = 10 * 10 ** 18

module.exports = {
  gasReporter: {
    enabled: process.env.REPORT_GAS,
    //currency: "USD",
    //outputFile: "gas-report.txt",
    //noColors: true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  solidity: "0.8.18",
  solidity: "0.8.19",
  INNITIAL_SUPPLY,
}
