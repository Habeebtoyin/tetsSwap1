import { useEffect, useState } from "react"
import BigNumber from 'bignumber.js'
import { getRouterContract } from "utils"
// import BriseswapRouterABI from "../../abis/BriseswapRouter.json"
import brisePriceFromAPI from "utils/brisePriceFromAPI"
import { useActiveWeb3React } from './index'
// import useInterval from "./useInterval"

// const BRISESWAPROUTER_ADDRESS = "0xE396407e21F7d7526ff0b0a8912751C64957fBF7"
const bswap_address = "0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56"
const wbrise_address = "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710"
const usdt_address = "0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06"
const usdt_decimals = 18
const brise_decimals = 18
const amountIn_brise = "1000000000000000000"
const amountIn_bswap = "1000000000000000000"
const brise_usdt_path = [wbrise_address, usdt_address]
const bswap_brise_path = [bswap_address, wbrise_address]


const useGetBswapPrice = () => {
  const [price, setPrice] = useState(0)

  const { chainId, library } = useActiveWeb3React()

  useEffect(() => {

    const fetchData = async () => {
      try {
        // const response = await fetch(api)
        // const brisePriceBN = await brisePriceFromAPI()

        if(!chainId || !library){
          throw new Error('missing dependencies')
        }
        const router = getRouterContract(chainId, library)
        // const res: ApiResponse = await response.json();
        // const res = JSON.parse(JSON.stringify(dummyPriceData));

        const [, brisePriceRaw] = await router.getAmountsOut(amountIn_brise, brise_usdt_path)
        const brisePriceUSDBN = (new BigNumber(brisePriceRaw.toNumber())).div(new BigNumber(10).pow(new BigNumber(usdt_decimals)))

        const [, briseAmountRaw] = await router.getAmountsOut(amountIn_bswap, bswap_brise_path)
        setPrice((briseAmountRaw / 10**brise_decimals) * brisePriceUSDBN.toNumber())
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }
    fetchData()

    }, [setPrice, chainId, library])

  console.log("bswap price: ", price)
  return price

}

export default useGetBswapPrice
