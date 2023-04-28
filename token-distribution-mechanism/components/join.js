import { useState, useEffect } from "react"
import { MissingStaticPage } from "next/dist/shared/lib/utils"
import { useWeb3ExecuteFunction, useMoralis, useApiContract } from "react-moralis"
import abi from "../constants/abi.json"
import contractAddresses from "../constants/contractAddresses.json"
import { ethers } from "ethers"

export default function Join() {
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const purejson = { 31337: ["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"] }

  const [entranceFee, setEntranceFee] = useState("0")

  // async function updateUI() {
  //   console.log("updating UI" + (await joinMechanism()))
  //   let entranceFeeCall = (await joinMechanism()).toString()
  //   setEntranceFee(entranceFeeCall)
  // }

  // useEffect(() => {
  //   if (isWeb3Enabled) {
  //     //updateUI()
  //   }
  // }, [isWeb3Enabled])

  async function simpleUpdateUI() {
    console.log("error message:   " + error)
    console.log("updating UI:   " + data)
    console.log("current account:   " + account)
  }

  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: abi,
    contractAddress: contractAddresses[chainId][0],
    functionName: "testNumber",
    params: {},
  })

  return (
    <div>
      <div>
        <button onClick={fetch} disabled={isFetching}>
          Fetch data
        </button>
        {data && <pre>{JSON.stringify(data)}</pre>}
      </div>
      <button onClick={simpleUpdateUI}>print data</button>
    </div>
  )
}
