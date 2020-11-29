import { useState } from 'react'
import { connect } from 'react-redux'
import {addNewUser} from '../actions/users'

const SignUp = ({users, dispatch}) => {
    let [newUser, setNewUser] = useState(false)
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
        
        // fallback to default avatarUrl if provided url is not valid
        const validAvatarUrl = avatarUrl => {
            const re = new RegExp('^(https?:\\/\\/)?'+
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
              '((\\d{1,3}\\.){3}\\d{1,3}))'+
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
              '(\\?[;&a-z\\d%_.~+=-]*)?'+
              '(\\#[-a-z\\d_]*)?$','i')
            
              return re.test(avatarUrl) 
                ? avatarUrl 
                : 'https://th.bing.com/th/id/OIP.V4cmxkcmkdMgZSH-P_4blwAAAA?pid=Api&w=177&h=177&c=7'
          }

        dispatch(addNewUser({
            name: name,
            username: username,
            avatarUrl: validAvatarUrl(avatarUrl)
        }))
    }

    return (
        <div>
            {!newUser 
              ? <button 
                  onClick={() => setNewUser(() => newUser = true)}
                  className='btn btn-primary text-dark m-5'>Or Sign Up Here
                </button>
              : (<div>
                  <h3>Sign Up:</h3>
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
                </div>)
            }
        </div>
    )
}

const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps)(SignUp)