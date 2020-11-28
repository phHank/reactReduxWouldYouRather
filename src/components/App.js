import { useEffect } from 'react'
import { connect } from 'react-redux'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
}  from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Nav from './Nav'
import PollDisplay from './PollDisplay'
import Poll from './Poll'
import Container from './Container'
import NotFound from './NotFound'
import SignUp from './SignUp'

const App = ({authedUser, dispatch}) =>{  
  useEffect(() => dispatch(handleInitialData()), [dispatch])

  return (
    <div>
      <h1 className='d-flex justify-content-center text-dark bg-primary mb-0 p-2'>The Would You Rather App</h1>
      {authedUser === null 
        ? (
      <div>
        <div className='d-flex justify-content-center p-5 border border-primary'>
          <h3>Please Login:&nbsp;</h3>
          <Login />
        </div>
        <div className='d-flex justify-content-center p-5 border border-primary'>
          <SignUp />
        </div>
      </div>)
      : <Router>
          <Nav />
          <br></br>
          <Switch>
            <Route exact path='/' render={() => (
              <PollDisplay />
            )} />
            <Route path='/leaderboard' render={() => (
              <Container currentPage={'leaderboard'} />
            )} />
            <Route path='/add' render={() => (
              <Container currentPage={'add'} />
            )} />
            <Route path='/questions/:qid' component={Poll} />
            <Route component={NotFound} />
          </Switch>
        </Router>}
    </div>
  )
}

const mapStateToProps = ({authedUser}) => ({ authedUser })

export default connect(mapStateToProps)(App);