import { MissingStaticPage } from "next/dist/shared/lib/utils"
import { useMoralisWeb3Api, useWeb3Contract } from "react-moralis"
import { abi } from "../constants/abi.json"
import { contractAddresses } from "../constants/contractAddresses.json"
import { useEffect } from "react"

export default function Join() {
  const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()
  const chainId = parseInt(chainIdHex)

  const { joinMechanism } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddresses[chainId][0],
    functionName: "createUser",
    params: { account },
    msgValue: 1 * 10 ** 8,
  })

  ;async () => {
    await joinMechanism()
  }
  /*
  useEffect(() => {
    if (isWeb3Enabled) {
      const { joinMechanism } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddresses[chainId][0],
        functionName: "pointsOf",
        params: {},
      })
    }
  })
*/
  return <div>hey</div>
}
