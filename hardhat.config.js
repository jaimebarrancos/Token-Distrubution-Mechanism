require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  solidity: "0.8.18",
  solidity: "0.8.19",
}
