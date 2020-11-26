import { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserLogin } from '../actions/authedUser'
import Logout from './Logout'

class Login extends Component {
    handleSelect = event => {
        const {dispatch} = this.props

        dispatch(handleUserLogin(event.target.value))
    }
    
    render() {
        const { users, authedUser } = this.props
        return (
            <div>
                <select onChange={this.handleSelect} 
                    defaultValue={authedUser === null 
                        ? 'default'
                        : authedUser} 
                    disabled={authedUser}>
                    <option className='dropdown-item' value='default' disabled>Choose Your Username...</option>
                    {Object.keys(users).sort().filter(user => authedUser ? user === authedUser : true).map(user => (
                    <option className='dropdown-item' key={user} value={user}>{users[user].id}</option>
                    ))}
                </select>
                {authedUser && <Logout />}
            </div>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => ({
    users,
    authedUser
})

export default connect(mapStateToProps)(Login)