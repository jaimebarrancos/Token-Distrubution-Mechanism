//import
//main func
//call main func

const { deployments, getNamedAccounts, network } = require("hardhat")

async function deployFunction() {
  console.log("--- deploying ...")
  hre.getNamedAccounts
  hre.deployments

  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  //const chainId = network.config.chainId

  await deploy("TokenDistrubutionMechanism", {
    from: deployer,
    args: ["Hello"],
    log: true,
  })
}

module.exports.default = deployFunction

//same as
/*
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
}
*/
