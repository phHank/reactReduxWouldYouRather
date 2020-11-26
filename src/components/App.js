import {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
//import PollDisplay from './PollDisplay'
//import Poll from './Poll'
import Container from './Container'

class App extends Component {  
  componentDidMount = () => {
    const { dispatch } = this.props
  
    dispatch(handleInitialData())
  }
  
  render () {
    const { authedUser } = this.props
    return (
      <div>
        <h1 className='d-flex justify-content-center text-dark bg-primary mb-0 p-2'>The Would You Rather App</h1>
        {authedUser === null 
          ? (
        <div className='d-flex justify-content-center p-5 border border-primary'>
          <h3>Please Login:&nbsp;</h3>
          <Login />
        </div>)
        : <div>
            <Login />
            <br></br>
            {/* <PollDisplay />
            <Poll /> */}
            <Container />
          </div>}
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => ({authedUser})

export default connect(mapStateToProps)(App);