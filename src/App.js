import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <ProtectedRoute exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
