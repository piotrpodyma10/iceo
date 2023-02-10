import { createSlice } from '@reduxjs/toolkit'
import { Filters, State } from '../../models/store/store'

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    date: '',
    balanceType: '',
  } as Filters,
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload
    },
    updateBalanceType: (state, action) => {
      state.balanceType = action.payload
    },
  },
})

export const { updateDate, updateBalanceType } = filtersSlice.actions
export const filters = (state: State) => state.filters

export default filtersSlice.reducer
