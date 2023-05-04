const { ethers } = require("hardhat")
const fs = require("fs")
const FRONT_END_ABI_FILE = "token-distribution-mechanism/constants/abi.json"
const FRONT_END_ADDRESSES_FILE = "token-distribution-mechanism/constants/contractAddresses.json"
require("dotenv").config()

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log(" --- updating abi & addresses---")
    updateContractAddressess()
    updateAbi()
  }
}

async function updateAbi() {
  const contract = await ethers.getContractFactory("Distrubution")
  fs.writeFileSync(FRONT_END_ABI_FILE, contract.interface.format(ethers.utils.FormatTypes.json))
}

//depends on the network
async function updateContractAddressess() {
  const contract = await ethers.getContractFactory("Distrubution")
  DistrubutionContract = await contract.deploy(process.env.ENTRY_FEE)

  const currentAddresses = JSON.parse(fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8"))
  const chainId = network.config.chainId.toString()
  if (chainId in currentAddresses)
    if (!currentAddresses[chainId].includes(DistrubutionContract.address)) {
      currentAddresses[chainId].push(DistrubutionContract.address)
    }
  {
    currentAddresses[chainId] = [DistrubutionContract.address]
  }

  fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses))
}

module.exports.tags = ["all", "frontend"]
