import { useState, useEffect } from "react"
import { MissingStaticPage } from "next/dist/shared/lib/utils"
import { useWeb3ExecuteFunction, useMoralis, useApiContract } from "react-moralis"
import abi from "../constants/abi.json"
import contractAddresses from "../constants/contractAddresses.json"
import { ethers } from "ethers"
import { Loading } from "web3uikit"
import Button from "@mui/material/Button"

export default function Join() {
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
  const chainId = parseInt(chainIdHex)

  const [entryFee, setEntryFee] = useState("0")

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
    console.log("\n ------LOGS----- \n \nerror message:   " + error)
    console.log("updating UI:   " + data)
    console.log("current account:   " + account)
    console.log("is loading?:   " + isLoading)
    let newEntryFee = data.toString()
    setEntryFee(newEntryFee)
  }

  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: abi,
    contractAddress: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512", //contractAddresses[chainId][0],
    functionName: "getBaseEntryFee",
    params: {},
  })

  return (
    <div>
      <div>
        <Button variant="contained" onClick={fetch} disabled={isFetching}>
          Fetch data
        </Button>
        Entry value is: {isLoading ? "loading..." : entryFee}
      </div>
      <Button onClick={simpleUpdateUI}>print data</Button>
    </div>
  )
}
