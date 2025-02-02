import { ChainId } from '@sushiswap/chain'
import { GRAPH_HOST_ENDPOINT } from '../../config.js'

export const GRAPH_HOST: Record<number | string, string> = {
  [ChainId.BSC]: GRAPH_HOST_ENDPOINT,
}

export const PANCAKESWAP_V2_SUPPORTED_CHAINS = [ChainId.BSC]

export const PANCAKESWAP_SUBGRAPH_NAME: Record<number | string, string> = {
  [ChainId.BSC]: 'pancakeswap/pairs',
}
