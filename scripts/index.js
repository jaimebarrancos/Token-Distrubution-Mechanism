import { ethers } from "./ethers.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const getTotalSupplyButton = document.getElementById("getTotalSupplyButton")

getTotalSupplyButton.onclick = getTotalSupply
connectButton.onclick = connect

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    console.log("connected")
  } else {
    console.log("no metamask!")
  }
}

async function getTotalSupply() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner() //get wallet connected
  const contract = new ethers.Contract(contractAddress, abi, signer)

  const bigNumber = ethers.BigNumber.from(await contract.totalSupply()) //call to contract
  document.getElementById("supplyId").innerHTML = bigNumber.toString()
}
