import { RowProps } from '../../../../models/components/common'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import { FormattedFunds } from '../../../../models/store/store'
import './Row.scss'

function Row({ row }: RowProps) {
  const transactionBanner = (fundsAvailable: FormattedFunds | undefined, currency: string | undefined) => {
    const { floatingValue = 0, spaceValue = '', spaceFloatingValue = '' } = fundsAvailable || {}
    let resultClass = 'positive-value'
    if (floatingValue < 0) resultClass = 'negative-value'
    return (
      <TableCell align='center'>
        <Tooltip className='tooltip' title={spaceValue} arrow placement='top'>
          <span className={`status ${resultClass}`}>
            {floatingValue > 0 && '+'}
            {spaceFloatingValue} {currency}
          </span>
        </Tooltip>
      </TableCell>
    )
  }

  return (
    <TableRow className='table-row' hover sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell className='table-cell' component='th' scope='row'>
        {row.formattedDate}
      </TableCell>
      <TableCell className='table-cell' align='center'>
        {row.userName}
      </TableCell>
      {transactionBanner(row.formattedFunds, row.currency)}
      <TableCell className='table-cell' align='center'>
        {row.balanceType}
      </TableCell>
      <TableCell className='table-cell' align='center'>
        {row.balanceName}
      </TableCell>
    </TableRow>
  )
}

export default Row
