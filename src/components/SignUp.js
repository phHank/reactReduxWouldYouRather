import {Component} from 'react'
import { connect } from 'react-redux'
import {addNewUser} from '../actions/users'

class SignUp extends Component {
    state = {
        name: '',
        username: '',
        avatarUrl: '',
        userValid: true
    }

    handleChange = event => {
        this.setState(() => ({
            [event.target.name]: event.target.value,
            userValid: true
        }))
    }


    handleNewUser = event => {
        event.preventDefault()
        const {users, dispatch} = this.props
        const {name, username, avatarUrl} = this.state

        if (Object.keys(users).includes(username)) {
            this.setState(() => ({userValid: false}))
            return 
        }
        
        dispatch(addNewUser({
            name: name,
            username: username,
            avatarUrl: avatarUrl
        }))
    }


    render() {
        return (
            <div>
                <h3>Or Sign Up:</h3>
                {!this.state.userValid && (<span className='text-danger'>That username is taken</span>)}
                <form onSubmit={this.handleNewUser}>
                    <input 
                      className='m-1'
                      type='text'
                      placeholder='Your Name'
                      required
                      name='name'
                      value={this.state.name}
                      onChange={this.handleChange}
                       />
                    <input 
                      className={this.state.userValid ? 'm-1' : 'border border-danger m-1'}
                      type='text'
                      placeholder='Preferred Username'
                      required
                      name='username'
                      value={this.state.username}
                      onChange={this.handleChange}
                       />
                    <input
                      className='m-1'
                      type='text'
                      placeholder='Avatar Image URL'
                      name='avatarUrl'
                      value={this.state.avatarUrl}
                      onChange={this.handleChange}
                       />
                    <div>
                    <button 
                      className='btn btn-primary text-dark m-2' 
                      type='Submit'>
                          Register
                    </button> 
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps)(SignUp)