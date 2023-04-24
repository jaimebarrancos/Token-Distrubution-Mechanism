import { useState, useEffect } from "react"
import { MissingStaticPage } from "next/dist/shared/lib/utils"
import { useMoralisWeb3Api, useWeb3Contract, useMoralis } from "react-moralis"
import abi from "../constants/abi.json"
import contractAddresses from "../constants/contractAddresses.json"
import { ethers } from "ethers"

export default function Join() {
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const purejson = { 31337: ["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"] }
  const [entranceFee, setEntranceFee] = useState("0")

  console.log("--current account ->" + account)

  const { runContractFunction: joinMechanism } = useWeb3Contract()
  let hey = {
    abi: abi,
    contractAddress: purejson["31337"],
    functionName: "pointsOf",
    params: { account },
    msgValue: 1 * 10 ** 8,
  }
  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        console.log("updating UI" + joinMechanism({ params: hey }))
        let entranceFeeCall = (await joinMechanism()).toString()
        setEntranceFee(entranceFeeCall)
      }
      updateUI()
    }
  }, [isWeb3Enabled])

  return <div>hey {entranceFee} </div>
}
