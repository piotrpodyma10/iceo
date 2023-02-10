import { useState } from 'react'
import { getComparator, stableSort } from '../../../utils/sortUtils'
import { DataTableProps } from '../../../models/components/common'
import { TableSortLabel } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Pagination from './pagination/Pagination'
import Box from '@mui/material/Box'
import Row from './row/Row'
import { Transaction } from '../../../models/store/store'
import Filters from '../filters/Filters'
import './DataTable.scss'

export default function DataTable({ data }: DataTableProps) {
  const { rows, columns } = data
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [orderBy, setOrderBy] = useState<string>('status')
  const [order, setOrder] = useState<any>('asc')
  const [page, setPage] = useState<number>(0)

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const createSortHandler = (property: string) => () => {
    handleRequestSort(property)
  }
  const handleChangePage = (event: any, newPage: number): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const sortSliceData = (rows: Transaction[]) =>
    stableSort(rows, getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row: Transaction, index: number) => <Row key={index} row={row} />)

  return (
    <div className='data-table'>
      <Filters />
      <TableContainer className='table-container'>
        <Table>
          <TableHead>
            <TableRow>
              <>
                {columns.map((column, index) => (
                  <TableCell
                    className='header-cell'
                    align={index ? 'center' : 'left'}
                    key={index}
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={createSortHandler(column.id)}
                    >
                      {column.label}
                      {orderBy === column.id ? (
                        <Box sx={visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </>
            </TableRow>
          </TableHead>
          <TableBody>{sortSliceData(rows)}</TableBody>
        </Table>
      </TableContainer>
      <TableFooter>
        <TableRow>
          <TablePagination
            className='table-pagination'
            rowsPerPageOptions={[5, 10, 15, 25, { label: 'All', value: -1 }]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={Pagination}
          />
        </TableRow>
      </TableFooter>
    </div>
  )
}
