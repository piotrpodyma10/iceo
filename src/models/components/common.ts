import { Transaction, Transactions } from '../store/store'

export type SidebarProps = {
  children: JSX.Element
  window?: any
}

export type CardProps = {
  children: JSX.Element
  className?: string
}

export type NavbarMenuProps = {
  handleDrawerToggle: (arg: any) => void
  drawerWidth: number
}

export type PaginationProps = {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (event: any, page: number) => void
}

export type RowProps = {
  row: Transaction
}

export type DataTableProps = {
  data: {
    rows: Transaction[]
    columns: {
      label: string
      id: string
    }[]
  }
}

export type TableData = {
  rows: Transaction[] | []
  columns: {
    label: string
    id: string
  }[]
}
