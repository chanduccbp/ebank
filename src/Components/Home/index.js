import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/ebank/login')
  }

  return (
    <div className="home-cont">
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="w-logo"
        />
        <button type="button" onClick={onClickLogout} className="lo-butt">
          Logout
        </button>
      </nav>
      <div className="m-cont">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="card-pic"
        />
      </div>
    </div>
  )
}

export default Home
