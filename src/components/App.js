import {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Logout from './Logout'
import PollDisplay from './PollDisplay'
import Poll from './Poll'

class App extends Component {  
  componentDidMount = () => {
    const { dispatch } = this.props
  
    dispatch(handleInitialData())
  }
  
  render () {
    const { authedUser } = this.props
    return (
      <div>
        <h1 className='d-flex justify-content-center'>The Would You Rather App</h1>
        {authedUser === null 
          ? (
        <div className='d-flex justify-content-center mt-5 p-5 border border-primary'>
          <h3>Please Login:&nbsp;</h3>
          <Login />
        </div>)
        : <div>
            <Login />
            <Logout />
            {/*<PollDisplay />*/}
            <Poll />
          </div>}
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => ({authedUser})

export default connect(mapStateToProps)(App);