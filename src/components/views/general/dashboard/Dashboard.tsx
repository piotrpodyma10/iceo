import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Card from '../../../common/card/Card'
import DataTable from '../../../common/dataTable/DataTable'
import { TableData } from '../../../../models/components/common'
import { transactions } from '../../../../features/transactions/transactionsSlice'
import { filters } from '../../../../features/filters/filtersSlice'

function DevicesHealthTable() {
  const { history } = useSelector(transactions)
  const [dataRecords, setDataRecords] = useState(history || [])
  const { date, balanceType } = useSelector(filters)

  useEffect(() => {
    if (history.length > 0 && dataRecords.length === 0) {
      setDataRecords(history)
    }
    if (date && balanceType) {
      const today = moment()
      setDataRecords(
        history.filter(
          (data) => today.diff(moment.unix(data.createdAt / 1000), 'days') < date && data.balanceType === balanceType
        )
      )
      return
    }
    if (balanceType) {
      setDataRecords(history.filter((data) => data.balanceType === balanceType))
      return
    }
    if (date) {
      const today = moment()
      setDataRecords(history.filter((data) => today.diff(moment.unix(data.createdAt / 1000), 'days') < date))
      return
    }
  }, [history, balanceType, date])

  const tableData: TableData = {
    rows: dataRecords,
    columns: [
      { label: 'Data', id: 'createdAt' },
      { label: 'Użytkownik', id: 'userName' },
      { label: 'Kwota', id: 'fundsAvailable' },
      { label: 'Typ operacji', id: 'balanceType' },
      { label: 'Klient/Serwis', id: 'balanceName' },
    ],
  }

  return (
    <Card className='devices-health-table'>
      <DataTable data={tableData} />
    </Card>
  )
}

export default DevicesHealthTable
