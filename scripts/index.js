import { ethers } from "./ethers.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const runContractFunctionButton = document.getElementById(
  "runContractFunctionButton"
)
runContractFunctionButton.onclick = runContractFunction
connectButton.onclick = connect

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    console.log("connected")
  } else {
    console.log("no metamask!")
  }
}

//Provider / connection
//signer / wallet
//contract with abi and address

async function runContractFunction() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log("got provider")
  const signer = provider.getSigner() //get wallet connected
  console.log("got signer")

  const contract = new ethers.Contract(contractAddress, abi, signer)
  const transactionResponse = await contract.totalSupply()
  console.log(transactionResponse)
}
