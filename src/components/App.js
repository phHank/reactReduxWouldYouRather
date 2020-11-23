import {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Logout from './Logout'

class App extends Component {  
  componentDidMount = () => {
    const { dispatch } = this.props
  
    dispatch(handleInitialData())
  }
  
  render () {
    const { authedUser } = this.props
    return (
      <div>
        {authedUser === null 
          ? (
        <div>
          <h3>Please Login</h3>
          <Login />
        </div>)
        : <div>
            <Login />
            <Logout />
          </div>}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);