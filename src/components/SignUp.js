import { useState } from 'react'
import { connect } from 'react-redux'
import {addNewUser} from '../actions/users'

const SignUp = ({users, dispatch}) => {
    let [name, setName] = useState('')
    let [username, setUsername] = useState('') 
    let [avatarUrl, setAvatarUrl] = useState('') 
    let [userValid, setUserValid] = useState(true)

    const handleNewUser = event => {
        event.preventDefault()

        if (Object.keys(users).includes(username)) {
            setUserValid(() => userValid = false)
            return 
        }
        
        dispatch(addNewUser({
            name: name,
            username: username,
            avatarUrl: avatarUrl
        }))
    }

    return (
        <div>
            <h3>Or Sign Up:</h3>
            {!userValid && (
                <span className='text-danger'>That username is taken</span>
                )}
            <form onSubmit={handleNewUser}>
                <input 
                    className='m-1'
                    type='text'
                    placeholder='Your Name'
                    required
                    value={name}
                    onChange={event => setName(() => name = event.target.value)}
                    />
                <input 
                    className={userValid 
                    ? 'm-1' 
                    : 'border border-danger m-1'}
                    type='text'
                    placeholder='Preferred Username'
                    required
                    value={username}
                    onChange={event => {
                        setUsername(() => name = event.target.value)
                        setUserValid(() => userValid = true)
                    }}
                    />
                <input
                    className='m-1'
                    type='text'
                    placeholder='Link your Avatar Image'
                    value={avatarUrl}
                    onChange={event => setAvatarUrl(() => name = event.target.value)}
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

const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps)(SignUp)