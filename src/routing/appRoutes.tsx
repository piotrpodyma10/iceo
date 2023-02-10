import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../components/common/sidebar/Sidebar'
import General from '../components/views/general/General'

export const AppRoutes = () => (
  <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path='/' element={<General />} />
      </Routes>
    </Sidebar>
  </BrowserRouter>
)

export default AppRoutes
