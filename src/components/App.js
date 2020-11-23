import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {  
  componentDidMount = () => {
    const { dispatch } = this.props
  
    dispatch(handleInitialData())
  }
  
  render () {
    const { users } = this.props
    return (
      <ul>
        {Object.keys(users).map(name => (
          <li key={name}>{users[name].name}</li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(App);