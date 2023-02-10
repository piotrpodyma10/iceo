import { createSlice } from '@reduxjs/toolkit'
import { State, Transactions } from '../../models/store/store'
import { combineRecords } from './transactionsUtils'

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    history: [],
  } as Transactions,
  reducers: {
    getHistoryTransactions: (state) => {
      if (state.history.length < 1) {
        state.history = combineRecords()
      }
    },
  },
})

export const { getHistoryTransactions } = transactionsSlice.actions
export const transactions = (state: State) => state.transactions

export default transactionsSlice.reducer
