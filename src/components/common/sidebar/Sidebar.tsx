import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarProps } from '../../../models/components/common'
import { sidebarRoutes } from './sidebarRoutes/sidebarRoutes'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import NavbarMenu from '../navbarMenu/NavbarMenu'
import SidebarHeader from './sidebarHeader/SidebarHeader'
import './Sidebar.scss'

function Sidebar({ children, window }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const location = useLocation()
  const drawerWidth = 208
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const container = window !== undefined ? () => window().document.body : undefined

  const handleUrlLocation = (url: String) => {
    let foundIndex: number = 0
    sidebarRoutes.map((route, index) => {
      const link = route.link.split('/')[1]
      const screenName = url.split('/')[1]
      if (link === screenName) {
        foundIndex = index
      }
    })
    return foundIndex
  }

  useEffect(() => {
    setSelectedIndex(handleUrlLocation(location.pathname))
  }, [location.pathname])

  const sidebar = (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <SidebarHeader />
        <div className='route-container'>
          Zarządzanie
          <List className='route-list'>
            {sidebarRoutes.map((route, index) => {
              const liClasses = selectedIndex === index ? 'selectedItem' : ''
              return (
                <ListItem
                  className={liClasses}
                  component={Link}
                  button
                  key={route.title}
                  to={route.link}
                  selected={index === selectedIndex}
                >
                  <ListItemIcon className='icon-container'>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItem>
              )
            })}
          </List>
          <Divider />
        </div>
      </div>
    </div>
  )

  return (
    <Box className='screen-container'>
      <CssBaseline />
      <NavbarMenu drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Box component='nav' sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
        <Drawer
          container={container}
          className='sidebar'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
          }}
        >
          {sidebar}
        </Drawer>
        <Drawer
          variant='permanent'
          className='sidebar'
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
          open
        >
          {sidebar}
        </Drawer>
      </Box>
      <Box
        className='screen-content'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default Sidebar
