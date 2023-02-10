import GroupIcon from '@mui/icons-material/Group'
import AssessmentIcon from '@mui/icons-material/Assessment'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

export const sidebarRoutes = [
  {
    title: 'Dashboard',
    link: '/',
    icon: <AssessmentIcon className='route-icon' />,
  },
  {
    title: 'Użytkownicy',
    link: '/users',
    icon: <GroupIcon className='route-icon' />,
  },
  {
    title: 'Waluty',
    link: '/currencies',
    icon: <CurrencyExchangeIcon className='route-icon' />,
  },
  {
    title: 'Salda',
    link: '/balances',
    icon: <AccountBalanceWalletIcon className='route-icon' />,
  },
]
