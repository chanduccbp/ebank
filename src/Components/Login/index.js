import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {userId: '', pin: '', showError: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()

    if (response.ok) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, showError, errorMsg} = this.state

    return (
      <div className="login-cont">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="wl-pic"
          />
          <form className="form" onSubmit={this.onClickLogin}>
            <h1>Welcome Back!</h1>
            <div className="input-cont">
              <label htmlFor="user-id">User ID</label>
              <input
                id="user-id"
                placeholder="Enter User ID"
                className="input-el"
                type="text"
                onChange={this.onChangeUserId}
                value={userId}
              />
            </div>
            <div className="input-cont">
              <label htmlFor="pin">PIN</label>
              <input
                id="pin"
                placeholder="Enter PIN"
                className="input-el"
                type="password"
                onChange={this.onChangePin}
                value={pin}
              />
            </div>
            <button type="submit" className="butt">
              Login
            </button>
            {showError && <p className="error-text">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
