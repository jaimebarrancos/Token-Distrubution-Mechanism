import { useState, useEffect } from "react"
import { MissingStaticPage } from "next/dist/shared/lib/utils"
import { useWeb3ExecuteFunction, useMoralis, useApiContract } from "react-moralis"
import abi from "../constants/abi.json"
import contractAddresses from "../constants/contractAddresses.json"
import { ethers } from "ethers"
import { Loading } from "web3uikit"
import Button from "@mui/material/Button"
import { ConstructionOutlined } from "@mui/icons-material"
import buttonEffect from "./grid-style/fullbordereffect.module.css"

export default function Join() {
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
  const chainId = parseInt(chainIdHex)

  const [entryFee, setEntryFee] = useState("")

  async function simpleUpdateUI() {
    console.log("\n ------LOGS----- \n \nerror message:   " + error)
    console.log("updating UI:   " + data)
    console.log("current account:   " + account)
  }
  //<Button onClick={simpleUpdateUI}>print data</Button>
  const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
    abi: abi,
    contractAddress:
      contractAddresses[chainId] === undefined
        ? console.log("not connected to metamask")
        : contractAddresses[chainId][0],
    functionName: "getBaseEntryFee",
    params: {},
  })

  useEffect(() => {
    isWeb3Enabled ? (() => fetch())() : setEntryFee("")
  }, [isWeb3Enabled]) // wait for wallet

  useEffect(() => {
    console.log("effecting...")
    if (data != null) {
      console.log("useEffect succeded " + data)

      setEntryFee(ethers.utils.formatEther(data.toString()))
    }
  }, [data])

  return (
    <div>
      <div>
        <Button className={buttonEffect.BorderEffect} variant="contained" disabled={isFetching}>
          {entryFee.toString() == ""
            ? "Please connect a wallet!"
            : "Please transfer " + entryFee.toString() + " eth to join."}
        </Button>
      </div>
    </div>
  )
}
