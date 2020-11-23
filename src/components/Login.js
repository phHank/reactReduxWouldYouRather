import { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserLogin } from '../actions/authedUser'

class Login extends Component {
    handleSelect = event => {
        const {dispatch} = this.props

        dispatch(handleUserLogin(event.target.value))
    }
    
    render() {
        const { users, authedUser } = this.props
        return (
            <select onChange={this.handleSelect} defaultValue={authedUser === null 
                    ? 'default'
                    : authedUser} >
                <option className='dropdown-item' value='default' disabled>Choose Your Username...</option>
                {Object.keys(users).sort().map(user => (
                <option className='dropdown-item' key={user} value={user}>{users[user].id}</option>
                ))}
            </select>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => ({
    users,
    authedUser
})

export default connect(mapStateToProps)(Login)