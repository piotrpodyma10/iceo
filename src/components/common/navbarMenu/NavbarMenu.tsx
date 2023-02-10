import { AppBar, IconButton, Toolbar } from '@mui/material'
import { NavbarMenuProps } from '../../../models/components/common'
import MenuIcon from '@mui/icons-material/Menu'
import SwitchTheme from './switchTheme/SwitchTheme'
import UserInfo from './userInfo/UserInfo'
import './NavbarMenu.scss'

function NavbarMenu({ handleDrawerToggle, drawerWidth }: NavbarMenuProps) {
  return (
    <AppBar
      position='fixed'
      className='appbar'
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
      }}
    >
      <Toolbar className='action-container'>
        <div className='toggle-icon-container'>
          <IconButton
            className='toggle-icon'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className='configuration-container'>
          <UserInfo />
          <SwitchTheme />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarMenu
