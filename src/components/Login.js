import { connect } from 'react-redux'
import { handleUserLogin } from '../actions/authedUser'
import Logout from './Logout'

const Login = ({users, authedUser, dispatch}) => {
    return (
        <div>
            <select onChange={event => dispatch(handleUserLogin(event.target.value))} 
                defaultValue={authedUser === null 
                    ? 'default'
                    : authedUser} 
                disabled={authedUser}>
                <option className='dropdown-item' value='default' disabled>Choose Your Username...</option>
                {Object.keys(users)
                  .sort()
                  .map(user => (
                <option className='dropdown-item' key={user} value={user}>{users[user].id}</option>
                ))}
            </select>
            {authedUser && <Logout />}
        </div>
    )
}

const mapStateToProps = ({ users, authedUser }) => ({
    users,
    authedUser
})

export default connect(mapStateToProps)(Login)