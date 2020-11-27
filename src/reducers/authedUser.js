import { RECEIVE_INITIAL_DATA } from '../actions/shared'
import { GET_AUTHED_USER, LOGOUT } from '../actions/authedUser'
import { ADD_USER } from '../actions/users'

const authedUser = (state = null, action) => {
    switch(action.type) {
        case RECEIVE_INITIAL_DATA:
            return action.authedUser
        case GET_AUTHED_USER:
            return action.authedUser
        case ADD_USER: 
            return action.username
        case LOGOUT:
            return action.authedUser
        default:
            return state
    }
}

export default authedUser