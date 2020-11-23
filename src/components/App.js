import {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

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
        : <Login />}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);