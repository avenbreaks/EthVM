import { Uncle } from './uncle'
import { Tx } from './tx'

export interface SmallBlock {
  number: number
  hash: string
}

export interface BlockStats {
  hash: string
  avgGasPrice: string
  avgTxsFees: string
  numFailedTxs: number
  numPendingTxs: number
  numSuccessfulTxs: number
  totalDifficulty: string
  difficulty: string
  processingTimeMs: number
  totalGasPrice: string
  totalTxsFees: string
  totalTxs: number
}

export interface Reward {
  address: string
  reward: string
}

export interface Header {
  number: string
  hash: string
  parentHash: string
  nonce: string
  sha3Uncles: string
  logsBloom: string
  transactionsRoot: string
  stateRoot: string
  receiptsRoot: string
  author: string
  difficulty: string
  extraData: string
  gasLimit: string
  gasUsed: string
  timestamp: number
}

export interface Block {
  header: Header
  totalDifficulty: string
  transactions: Tx[]
  uncles: Uncle[]
  unclesHash: string
  rewards: Reward[]
  stats: BlockStats
}
