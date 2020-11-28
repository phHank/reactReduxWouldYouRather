import {connect} from 'react-redux'
import {clearAuthedUser} from '../actions/authedUser'

const Logout = ({dispatch}) => {
    const handleLogout = event => {
        event.preventDefault()

        dispatch(clearAuthedUser())
    }

    return (
        <button className='btn btn-primary text-dark m-1' onClick={handleLogout}>
            Logout
        </button>
    )
}

export default connect()(Logout)