require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("dotenv").config()

//console.log(process.env)
const INNITIAL_SUPPLY = 10 * 10 ** 18

// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners()

//   for (const account of accounts) {
//     console.log(account.address)
//   }
// })

module.exports = {
  gasReporter: {
    enabled: false,
    //currency: "USD",
    //outputFile: "gas-report.txt",
    //noColors: true,
    // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, //  first account is deployer
    },
  },
  solidity: "0.8.18",
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: "http://127.0.0.1:8545/",
      forking: { url: process.env.ALCHEMY_GOERLI_RPC_URL },
    },
  },
  /*
    kovan: {
      url: process.env.KOVAN_RPC_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  */
  INNITIAL_SUPPLY,
}
