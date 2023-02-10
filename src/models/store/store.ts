export type State = {
  filters: Filters
  theme: Theme
  transactions: Transactions
}

export type Theme = {
  themeMode: string
}

export type Filters = {
  balanceType: string
  date: number | string
}

export type Transactions = {
  history: Transaction[] | []
}

export interface Transaction {
  userId: string
  balanceId: string
  currencyId: string
  balanceType: string
  balanceName: string
  currency?: string
  fundsAvailable: string
  updatedAt: number
  createdAt: number
  formattedFunds?: FormattedFunds
  formattedDate?: string
  precision?: number
  currencyName?: string
  userName?: string
}

export interface FormattedFunds {
  spaceValue: string
  spaceFloatingValue: string | string[] | undefined
  floatingValue: number
}
