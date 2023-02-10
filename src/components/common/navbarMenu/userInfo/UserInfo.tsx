import UserRole from './userRole/UserRole'
import User from './user/User'
import './UserInfo.scss'

function UserInfo() {
  return (
    <div className='user-info'>
      <UserRole />
      <User />
    </div>
  )
}

export default UserInfo
