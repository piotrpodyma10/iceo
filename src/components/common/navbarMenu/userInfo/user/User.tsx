import avatar from '../../../../../assets/imgs/avatar.png'
import './User.scss'

function User() {
  return (
    <div className='user'>
      <img className='user-avatar' src={avatar} />
      <div className='user-name-container'>
        <div className='user-name'>Jan Kowalski</div>
        <div className='user-email'>j.kowalski@gmail.com</div>
      </div>
    </div>
  )
}

export default User
