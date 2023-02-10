import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getHistoryTransactions } from '../../../features/transactions/transactionsSlice'
import Dashboard from './dashboard/Dashboard'
import './General.scss'

function General() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHistoryTransactions())
  }, [])

  return (
    <div className='general'>
      <div className='general-title'>Historia</div>
      <Dashboard />
    </div>
  )
}

export default General
