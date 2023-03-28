import { ethers } from "./ethers.js";
import { abi } from "constants";

const connectButton = document.getElementById("connectButton");

connectButton.onclick = connect;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("connected");
  } else {
    console.log("no metamask!");
  }
}

//Provider / connection
//signer / wallet
//contract with abi and address

async function connectToProvider() {
  console.log("doing something");
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner(); //get wallet connected
}
